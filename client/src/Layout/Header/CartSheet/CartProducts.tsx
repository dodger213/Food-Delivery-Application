import { useQuery } from "@tanstack/react-query";
import UpdateCart from "./UpdateCart";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GetUserCartItems } from "@/services/api";

export default function CartProducts() {
  const { data } = useQuery({
    queryKey: ["cart-items"],
    queryFn: GetUserCartItems,
  });

  // fix type

  return (
    <ScrollArea className="h-[65vh] px-5 py-3">
      {data?.products?.map((product: any) => (
        <div key={product._id}>
          <div className="flex items-center gap-16">
            <img src={product?.product.image} alt="img" className="size-20 object-cover" />
            <div>
              <p>{product?.product.name}</p>
              <p>Rs {product?.product.price}</p>
            </div>
          </div>
          <div className="py-3">
            <UpdateCart productId={product.product._id} count={product.count}/>
          </div>
        </div>
      ))}
    </ScrollArea>
  );
}
