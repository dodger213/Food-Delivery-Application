import { z } from "zod";

export const SignupSchema = z.object({
  body: z.object({
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Invalid email address" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, { message: "Password must be 6 or more characters long" })
      .max(16, { message: "password must be 16 or fewer characters long" }),
    firstname: z
      .string({ required_error: 'firstname is required' })
      .min(4, { message: 'firstname must be 4 or more characters long' }),
    lastname: z
      .string({ required_error: 'lastname is required' })
      .min(4, { message: 'lastname must be 4 or more characters long' }),
    mobile: z
      .string({ required_error: "mobile number is required" })
      .min(10, { message: "mobile number must be 10 or more characters long" })
  }),
});

export const SigninSchema = z.object({
  body: z.object({
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Invalid email address" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, { message: "Password must be 6 or more characters long" })
      .max(16, { message: "Password must be 16 or fewer characters long" }),
  }),
});