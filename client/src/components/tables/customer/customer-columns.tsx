import { ColumnDef } from "@tanstack/react-table";
import DropDownMenu from "./DropDownMenu";

export type Customer = {
  firstname: string;
  email: string;
  role: string;
  mobile: string;
  blocked: boolean;
  _id:string
};

export const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "firstname",
    header: "Firstname",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "mobile",
    header: "Mobile",
  },
  {
    accessorKey: "blocked",
    header: "Blocked",
  },
  {
    id: "actions",
    enableHiding: false,
    header: "Actions",
    cell: ({row}) => {
      return (
       <DropDownMenu id={row.original._id}/>
      );
    },
  },
];
