import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import starRating from "@/assets/rating_starts.png";
import { FoodType } from "@/services/api";

interface SiteProductCardProps {
  item: FoodType
}

export default function SiteProductCard({item}: SiteProductCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <img src={item.image} alt={item.name} className="h-40"/>
      </CardHeader>
      <CardContent className="flex items-center justify-between py-2">
        <p className="truncate text-xl font-bold tracking-wider">{item.name}</p>
      </CardContent>
      <CardContent className="py-1">
        <img src={starRating} alt={"rating"} />
      </CardContent>
      <CardFooter className="py-1">
        <p className="h-16 text-sm tracking-wide">{item.description}</p>
      </CardFooter>
      <CardFooter className="flex justify-between py-2">
        <p className="text-xl font-semibold">$ {item.price}</p>
        <p className="font-semibold underline">{item.category}</p>
      </CardFooter>
      <CardFooter>
        <Button className="w-full">
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  )
}
