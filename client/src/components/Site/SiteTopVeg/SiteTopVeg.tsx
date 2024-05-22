import { useQuery } from "@tanstack/react-query";
import SiteProductCard from "../SiteProductCard/SiteProductCard";
import { GetVegFoodApi } from "@/services/food.api";


export default function SiteTopVeg() {

  const {data: products} = useQuery({
    queryKey: ['top-veg'],
    queryFn: GetVegFoodApi
  })


  return (
    <section className="mt-10">
    <h1 className="text-center text-4xl font-extrabold">Top Veg Dishes</h1>
    <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
      {products?.map((item) => (
         <SiteProductCard key={item._id} item={item} />
      ))}
    </div>
  </section>
  )
}
