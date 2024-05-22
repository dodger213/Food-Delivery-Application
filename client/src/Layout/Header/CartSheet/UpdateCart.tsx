/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { RemoveFromCartApi, UpdateCartApi } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import { useState } from "react";


interface UpdateCartProps {
  count: number;
  productId: string;
}


export default function UpdateCart({count: initialCount, productId}: UpdateCartProps) {
  const [count, setCount] = useState(initialCount);
  const queryClient = useQueryClient()


  const { mutate } = useMutation({
    mutationFn: (newCount: number) => UpdateCartApi(productId, newCount),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart-items'] });
    },
  });

  const { mutate: RemovefromCart } = useMutation({
    mutationFn: (productId:string) => RemoveFromCartApi(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart-items'] });
    },
  });

  const handleRemovefromCart = () => {
    RemovefromCart(productId)
  }


  const handleDecrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      mutate(newCount);
    }
  };

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    mutate(newCount);
  };

  return (
    <div className="xs:w-auto  flex w-full items-center justify-between space-x-2">
      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          className="size-8 rounded-r-none"
          onClick={handleDecrement}
        >
          <MinusIcon className="size-3" aria-hidden="true" />
        </Button>
        <span className="size-8 rounded-none border-x-0 pl-3 pt-1">{count}</span>
        <Button
          variant="outline"
          size="icon"
          className="size-8 rounded-l-none"
          onClick={handleIncrement}
        >
          <PlusIcon className="size-3" aria-hidden="true" />
        </Button>
      </div>
      <Button variant="outline" size="icon" className="size-8">
        <TrashIcon className="size-3" aria-hidden="true" onClick={handleRemovefromCart}/>
      </Button>
    </div>
  );
}
