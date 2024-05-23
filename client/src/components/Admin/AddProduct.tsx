import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface ProductInputType {
  name: string;
  description: string;
  price: number;
  category: string;
  discount: number;
  ingredients: string;
  starRating: number;
  image: FileList | null;
}

export default function AddProduct() {
  const [open, setOpen] = useState(false)
  const form = useForm<ProductInputType>({
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      category: "",
      discount: 0,
      ingredients: "",
      starRating: 1,
      image: null,
    },
  });

  const onSubmit = async (data: ProductInputType) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', data.price.toString());
    formData.append('category', data.category);
    formData.append('discount', data.discount.toString());
    formData.append('ingredients', data.ingredients);
    formData.append('starRating', data.starRating.toString());
    if (data.image && data.image.length > 0) {
      formData.append('imageFile', data.image[0]);
    }

    try {
      const response = await fetch('http://localhost:3000/api/food/create-food', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json()
      if(data) {
        form.reset()
        setOpen(false)
        toast.success("product Added")
      }
    } catch (error) {
      toast.error("Failed to add product")
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle className="text-3xl">Add Product</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="discount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Discount</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ingredients"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ingredients</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="starRating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Star Rating</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" min="1" max="5" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormItem>
              <FormControl>
                <input
                  type="file"
                  onChange={(e) =>
                    form.setValue("image", e.target.files)
                  }
                />
              </FormControl>
            </FormItem>
            <FormDescription className="pt-4">
              Please fill in all the fields
            </FormDescription>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}