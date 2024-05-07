import { GetAllFoodListApi } from "@/services/api"
import { useQuery } from "@tanstack/react-query"
import SiteProductCard from "../SiteProductCard/SiteProductCard"


interface SiteFoodListProps {
    selected: string
}

export default function SiteFoodList({selected}: SiteFoodListProps) {

  const {data:products} = useQuery({
    queryKey: ['food-list'],
    queryFn: GetAllFoodListApi
  })

  return (
    <section>
      <h1 className="text-center text-4xl font-extrabold">Top Dishes for you</h1>
      <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
        {products?.map((item) => {
          if(selected === 'All' || selected.toLowerCase() === item.category.toLowerCase()) {
            return (
              <SiteProductCard key={item._id} item={item} />
            )
          }
        })}
         {products?.map((item) => (
           <SiteProductCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  )
}
