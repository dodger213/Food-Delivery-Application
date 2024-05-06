import { SignupSchema } from "@/utils/Schema";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {useForm} from 'react-hook-form'
import {z} from 'zod' 
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SignupUserApi } from "@/services/api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const queryClient = useQueryClient();
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof SignupSchema>>({resolver: zodResolver(SignupSchema), defaultValues: {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    mobile: '',
  }})

  const {mutate, isPending} = useMutation({
    mutationKey: ['signup'],
    mutationFn: SignupUserApi,
    onSuccess: (data) => {
      toast.success(data?.message)
      queryClient.invalidateQueries({ queryKey: ["authuser"]});
      navigate('/')
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  const onSubmit = (formData: z.infer<typeof SignupSchema>) => {
    mutate(formData)
  }


  return (
    <Form {...form}>
    <form className='space-y-4' onSubmit={form.handleSubmit(onSubmit)}>
      <FormField control={form.control} name="email" render={({field}) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input placeholder="Enter your email address..." type="email" {...field}/>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}/>
      <FormField control={form.control} name="firstname" render={({field}) => (
        <FormItem>
          <FormLabel>Firstname</FormLabel>
          <FormControl>
            <Input placeholder="Enter your firstname..." type="firstname" {...field}/>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}/>
      <FormField control={form.control} name="lastname" render={({field}) => (
        <FormItem>
          <FormLabel>Lastname</FormLabel>
          <FormControl>
            <Input placeholder="Enter your lastname..." type="lastname" {...field}/>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}/>
       <FormField control={form.control} name="password" render={({field}) => (
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input placeholder="Enter your password..." type="password" {...field}/>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}/>
      <FormField control={form.control} name="mobile" render={({field}) => (
        <FormItem>
          <FormLabel>Mobile</FormLabel>
          <FormControl>
            <Input placeholder="Enter your mobile..." type="mobile" {...field}/>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}/>
      <Button className='w-full' type="submit" disabled={isPending}>
      {isPending ? 'Loading...' : 'Submit'}
      </Button>
    </form>
  </Form>
  )
}
