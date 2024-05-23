import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import { UseBlockUnBlockUser, UseDeleteUser } from "./mutation";


interface DropProps {
    id: string
}

export default function DropDownMenu({id}: DropProps) {
  const blockunblock = UseBlockUnBlockUser()
  const deleteUser = UseDeleteUser()

  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="size-8 p-0">
        <span className="sr-only">Open menu</span>
        <Ellipsis />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem onClick={() => blockunblock.mutate(id)}>Block User</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => deleteUser.mutate(id)}>Delete User</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Edit User</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}
