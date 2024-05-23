import { Home, Package, Users, CookieIcon } from "lucide-react";
import { Link } from "react-router-dom";


const SidebarLinks = [
  {
    name: 'Dashboard',
    href: '/admindashboard',
    icon: <Home className="size-4" />
  },
  {
    name: 'Products',
    href: '/admindashboard/products',
    icon: <Package className="size-4" />
  },
  {
    name: 'Customers',
    href: '/admindashboard/customers',
    icon: <Users className="size-4" />
  }
]


export default function AdminSidebar() {
  return (
   <div className="flex h-screen w-[220px] flex-col  border-r">
       <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <CookieIcon className="size-6" />
          <span className="text-xl text-primary font-bold">FoodZone</span>
        </Link>
      </div>
      <div className="py-5">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {SidebarLinks.map((links) => (
              <Link
              key={links.name}
              to={links.href}
              className="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 text-lg transition-all"
            >
              {links.icon}
              {links.name}
            </Link>
          ))}
        </nav>
      </div>
   </div>
  )
}
