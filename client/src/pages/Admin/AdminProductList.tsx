import { columns } from "@/components/tables/product/product-columns";
import { DataTable } from "@/components/tables/product/product-table";
import { GetAllProductList } from "@/services/admin.api";
import { useQuery } from "@tanstack/react-query";


export default function AdminProductList() {

  const { data } = useQuery({
    queryKey: ["all-products"],
    queryFn: GetAllProductList
  });

  return (
    <section className="container mx-auto h-screen py-10">
      <DataTable columns={columns} data={data ?? []} filterName={'name'} />
    </section>
  )
}
