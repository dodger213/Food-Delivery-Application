import { SigninSchema } from '@/utils/Schema'
import { zodResolver } from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { SigninUserApi } from '@/services/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

export default function SigninForm() {
  const navigate = useNavigate()
  const queryClient = useQueryClient();
  const form = useForm<z.infer <typeof SigninSchema>>({resolver: zodResolver(SigninSchema), defaultValues: {
    email: '',
    password: ''
  }})


  const {mutate, isPending} = useMutation({
    mutationKey: ['signin'],
    mutationFn: SigninUserApi,
    onSuccess: (data) => {
      toast.success(data?.message)
      if (data.role === "admin") {
        const store = {
          value: true,
        };
        localStorage.setItem("checkwho", JSON.stringify(store));
      }
    },
    onError: (error) => {
      toast.error(error.message)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["authuser"] });
      queryClient.invalidateQueries({ queryKey: ["cart-items"] });
      queryClient.invalidateQueries({ queryKey: ["authadmin"] });
      navigate('/')
    }
  })

  const onSubmit = (formData: z.infer<typeof SigninSchema>) => {
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
         <FormField control={form.control} name="password" render={({field}) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input placeholder="Enter your password..." type="password" {...field}/>
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
