import { Button, buttonVariants } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useAuthContext } from "@/context/AuthContext"
import { cn } from "@/lib/utils"
import { LogoutUserApi } from "@/services/api"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CircleUser } from "lucide-react"
import { Link } from "react-router-dom"
import { toast } from "sonner"

export default function UserProfile() {
  const queryClient = useQueryClient()
  const {isAuth, isAdmin} = useAuthContext()
  

  
  const {mutate, isPending} = useMutation({
    mutationKey: ["logoutuser"],
    mutationFn: LogoutUserApi,
    onSuccess: (data) => {
      toast.success(data?.message)
      queryClient.invalidateQueries({ queryKey: ["authuser"] });
      queryClient.invalidateQueries({ queryKey: ["cart-items"] });
      localStorage.removeItem('checkwho')
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  const LogoutUser = () => {
    mutate()
  }


  return (
    <>
      {isAuth ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="size-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {isAdmin && (
              <Link to="/admindashboard">
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
              </Link>
            )}
            <DropdownMenuItem>My Account</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => LogoutUser()} disabled={isPending}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link to={"/Sign-in"} className={cn(buttonVariants({ variant: "default" }))}>
          Sign In
        </Link>
      )}
    </>
  )
}
