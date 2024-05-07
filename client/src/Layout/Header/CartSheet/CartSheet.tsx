import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { GetUserCartItems } from "@/services/api";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useQuery } from "@tanstack/react-query";
import { ShoppingCartIcon } from "lucide-react";
import { Link } from "react-router-dom";
import CartProducts from "./CartProducts";

export default function CartSheet() {

  const {data} = useQuery({
    queryKey: ['cart-items'],
    queryFn: GetUserCartItems
  })
  const ItemCount = data ? data?.products?.length : 0

  return (
    <Sheet>
    <SheetTrigger asChild>
      <Button variant={'outline'} size={'icon'} className="relative">
        {data && ItemCount > 0 && (
          <Badge className="absolute -right-2 -top-2 size-6 justify-center rounded-full p-2">{ItemCount}</Badge>
        )}
        <ShoppingCartIcon />
      </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Cart {data && (`${ItemCount}`)}</SheetTitle>
        <Separator />
      </SheetHeader>
      {data ? ItemCount > 0 && (
        <>
           <CartProducts />
           <div className="space-y-4 pr-6">
            <Separator />
            <div className="space-y-1.5 text-sm">
              <div className="flex">
                <span className="flex-1">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex">
                <span className="flex-1">Taxes</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex">
                <span className="flex-1">Total</span>
                <span>$ {data.cartTotal}</span>
              </div>
            </div>
            <SheetFooter>
              <SheetTrigger asChild>
                <Link
                  to="/cart"
                  className={buttonVariants({
                    size: "sm",
                    className: "w-full",
                  })}
                >
                  View Cart Page
                </Link>
              </SheetTrigger>
            </SheetFooter>
          </div>
        </>
      ): (
        <div className="flex h-full flex-col items-center justify-center space-y-1">
          <ShoppingCartIcon
            className="text-muted-foreground mb-4 size-16"
            aria-hidden="true"
          />
          <div className="text-muted-foreground text-xl font-medium">
            Your cart is empty
          </div>
          <SheetTrigger asChild>
            <Link
              aria-label="Add items to your cart to checkout"
              to="/"
              className={cn(
                buttonVariants({
                  variant: "link",
                  size: "sm",
                  className: "text-sm text-muted-foreground",
                })
              )}
            >
              Add items to your cart to checkout
            </Link>
          </SheetTrigger>
        </div>
      )}
    </SheetContent>
  </Sheet>
  );
}
