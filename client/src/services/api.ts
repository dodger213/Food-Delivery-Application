import { SigninSchema, SignupSchema } from "@/utils/Schema";
import { z } from "zod";
const base_url = import.meta.env.VITE_BASE_URL;

export const SignupUserApi = async (SignupData: z.infer<typeof SignupSchema>) => {
  const response = await fetch(`${base_url}/auth/SignUp`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(SignupData),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const SigninUserApi = async (SigninData: z.infer<typeof SigninSchema>) => {
  const response = await fetch(`${base_url}/auth/SignIn`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(SigninData),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const VerifyUserApi = async () => {
  const response = await fetch(`${base_url}/auth/verifyAuth`, {
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const LogoutUserApi = async () => {
  const response = await fetch(`${base_url}/auth/SignOut`, {
    method: "POST",
    credentials: "include",
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
};
