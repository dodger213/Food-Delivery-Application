import { Button } from "@/components/ui/button";
import { Ellipsis } from "lucide-react";
import { UseDeleteProduct, UseProductenableDisabled } from "./mutation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DropProps {
  id: string;
}

export default function DropDownMenu({ id }: DropProps) {
  const EnableDisableProduct = UseProductenableDisabled();
  const DeleteProduct = UseDeleteProduct()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="size-8 p-0">
          <span className="sr-only">Open menu</span>
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => DeleteProduct.mutate(id)}>Delete Product</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => EnableDisableProduct.mutate(id)}>Disable Product</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
