import { z } from 'zod';

export const SignupSchema = z.object({
  email: z.string({ required_error: 'Email is required' }).email({ message: 'Invalid email address' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, { message: 'Password must be 6 or more characters long' })
    .max(20, { message: 'Password must be 16 or fewer characters long' }),
  firstname: z
    .string({ required_error: 'Firstname is required' })
    .min(4, { message: 'Firstname must be 4 or more characters long' }),
  lastname: z
    .string({ required_error: 'Lastname is required' })
    .min(4, { message: 'Lastname must be 4 or more characters long' }),
  mobile: z.string({ required_error: 'Mobile number is required' }).min(10, { message: 'Mobile number must be Valid' }),
});

export const SigninSchema = z.object({
  email: z.string({ required_error: 'Email is required' }).email({ message: 'Invalid email address' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, { message: 'Password must be 6 or more characters long' })
    .max(20, { message: 'Password must be 16 or fewer characters long' }),
});