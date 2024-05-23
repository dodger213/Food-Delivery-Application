import { ColumnDef } from "@tanstack/react-table";
import DropDownMenu from "./DropDownMenu";



export type Product = {
  name: string;
  price: string;
  category: string;
  image: string
  vegetarian: string
};

export type ProductType = {
    _id: string;
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
    cell: ({row}) => {
      return (
       <DropDownMenu id={row.original._id} />
      );
    },
  },
];

