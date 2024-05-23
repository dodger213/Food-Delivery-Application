
import { columns } from "@/components/tables/customer/customer-columns";
import { DataTable } from "@/components/tables/customer/customer-table";
import { GetAllCustomersList } from "@/services/admin.api";
import { useQuery } from "@tanstack/react-query";



export default function AdminCustomerList() {
  const { data } = useQuery({
    queryKey: ["all-users"],
    queryFn: GetAllCustomersList,
  });
  return (
    <section className="container mx-auto h-screen py-10">
      <DataTable columns={columns} data={data ?? []} filterName={'email'} />
    </section>
  )
}
