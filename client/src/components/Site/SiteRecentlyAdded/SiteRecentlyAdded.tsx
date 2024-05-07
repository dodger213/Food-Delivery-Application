import { GetRecentlyAddedFoodApi } from "@/services/api"
import { useQuery } from "@tanstack/react-query"
import SiteProductCard from "../SiteProductCard/SiteProductCard"


export default function SiteRecentlyAdded() {

  const {data: products} = useQuery({
    queryKey: ['recent-added'],
    queryFn: GetRecentlyAddedFoodApi
  })


  return (
    <section className="mt-10">
      <h1 className="text-center text-4xl font-extrabold">Recently Added Dishes</h1>
      <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
        {products?.map((item) => (
           <SiteProductCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  )
}
