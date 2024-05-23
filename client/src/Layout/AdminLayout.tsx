import AdminHeader from "@/components/Admin/AdminHeader";
import AdminSidebar from "@/components/Admin/AdminSidebar";
import { Outlet } from "react-router-dom";



export default function AdminLayout() {
  return (
    <main className="flex">
        <AdminSidebar />
        <section className="w-full">
        <AdminHeader />
        <Outlet />
        </section>
    </main>
  )
}
