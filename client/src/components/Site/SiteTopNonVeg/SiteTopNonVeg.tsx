
import { GetNonVegFoodApi } from "@/services/food.api"
import SiteProductCard from "../SiteProductCard/SiteProductCard"
import { useQuery } from "@tanstack/react-query"


export default function SiteTopNonVeg() {

  const {data: products} = useQuery({
    queryKey: ['top-non-veg'],
    queryFn: GetNonVegFoodApi
  })


  return (
    <section className="mt-10">
    <h1 className="text-center text-4xl font-extrabold">Top Non-Veg Dishes</h1>
    <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
      {products?.map((item) => (
         <SiteProductCard key={item._id} item={item} />
      ))}
    </div>
  </section>
  )
}
