/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import { useState } from "react";

export default function UpdateCart({ productId }: { productId: string }) {
  const [Quantity, setnewQuantity] = useState(0);

  return (
    <div className="xs:w-auto  flex w-full items-center justify-between space-x-2">
      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          className="size-8 rounded-r-none"
          onClick={() => setnewQuantity(Quantity - 1)}
        >
          <MinusIcon className="size-3" aria-hidden="true" />
        </Button>
        <span className="size-8 rounded-none border-x-0 pl-3 pt-1">{Quantity}</span>
        <Button
          variant="outline"
          size="icon"
          className="size-8 rounded-l-none"
          onClick={() => setnewQuantity(Quantity + 1)}
        >
          <PlusIcon className="size-3" aria-hidden="true" />
        </Button>
      </div>
      <Button variant="outline" size="icon" className="size-8">
        <TrashIcon className="size-3" aria-hidden="true" />
      </Button>
    </div>
  );
}
