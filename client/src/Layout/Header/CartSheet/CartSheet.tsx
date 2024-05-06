import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCartIcon } from "lucide-react";

export default function CartSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"} size={"icon"} className="relative">
          <Badge className="absolute -right-2 -top-2 rounded-full justify-center p-2 size-6">10</Badge>
          <ShoppingCartIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
