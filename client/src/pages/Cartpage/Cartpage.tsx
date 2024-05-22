
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuthContext } from "@/context/AuthContext";
import UpdateCart from "@/Layout/Header/CartSheet/UpdateCart";
import { cn } from "@/lib/utils";
import { GetUserCartItems } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function Cartpage() {
  const { isAuth } = useAuthContext();
  const { data } = useQuery({
    queryKey: ["cart-items"],
    queryFn: GetUserCartItems,
  });

 

  return (
    <section className="mt-10 flex h-[80vh] w-full border">
      <div className="flex-1 px-10">
        <div className="flex items-center justify-between border-b py-5">
          <span className="text-2xl font-bold">Shopping Cart</span>
          <span>Cart Item {data?.products.length}</span>
        </div>
        <ScrollArea className="h-[85%]">
          <div className="grid grid-cols-4 gap-x-56 border-b p-5">
            <span className="w-[400px]">Product Details</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Total</span>
          </div>
          {data?.products.map((product) => (
            <div className="grid grid-cols-4 items-center gap-x-56 px-5 pt-2" key={product._id}>
              <div className="flex w-[400px] gap-5 py-2">
                <img src={product.product.image} className="size-[100px]" alt={product.product.name} />
                <div className="mt-6 flex flex-col">
                  <span>{product.product.name}</span>
                  <span>{product.product.category}</span>
                </div>
              </div>
              <div>
              <div>
                <UpdateCart productId={product.product._id} count={product.count}/>
              </div>
              </div>
              <div>
                <span className="flex w-10 gap-2">$ {product.product.price}</span>
              </div>
              <div>
                <span className="flex w-10 gap-2">$ {data.cartTotal}</span>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>

      <div className="flex w-1/4 flex-col justify-between border-l py-10 text-center">
        <div className="space-y-5 border-b pb-5">
          <h1 className="text-xl font-bold">Order Summary</h1>
          <div className="mx-10 flex justify-between">
            <h1>Cart Total</h1>
            <span>$ {data?.cartTotal}</span>
          </div>
        </div>

        <div className="space-y-5">
          <h1 className="font-bold">Promo Code</h1>
          <Input placeholder="Enter your promo code" className="mx-auto w-2/3" />
          <Button size={"lg"}>Apply</Button>
        </div>

        <div className="border-t">
          <div className="mx-10 flex items-center justify-between py-5">
            <span>Total Cost</span>
            <span>$ {data?.cartTotal}</span>
          </div>
          {isAuth ? (
            <Link
              to="/checkout"
              className={cn(buttonVariants({ variant: "default", size: "sm" }), "w-2/3 rounded-none")}
            >
              Checkout
            </Link>
          ) : (
            <Link
              to="/checkout"
              className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "w-2/3 rounded-none")}
            >
              Please Login
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
