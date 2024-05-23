import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ColumnDef } from "@tanstack/react-table";
import { Ellipsis } from "lucide-react";

export type Product = {
  name: string;
  price: string;
  category: string;
  image: string
  vegetarian: string
};

export type ProductType = {
    _id?: string;
    name: string;
    description: string;
    price: number;
    image?: string;
    category: string;
    vegetarian?: string;
    available: boolean
  };

export const columns: ColumnDef<ProductType>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const imageurl = row.getValue("image")
 
      return <div className="text-right font-medium">
        <img src={imageurl as string} className="h-12 w-16"  alt={'product-img'} />
      </div>
    },
  },
  {
    accessorKey: "vegetarian",
    header: "Vegetarian",
  },
  {
    accessorKey: "available",
    header: "Available",
  },
  {
    id: "actions",
    enableHiding: false,
    header: "Actions",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="size-8 p-0">
              <span className="sr-only">Open menu</span>
              <Ellipsis />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Delete Product</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit Product</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Disable Product</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
