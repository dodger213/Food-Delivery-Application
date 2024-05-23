import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/Forms/CheckoutForm";
import { base_url, CartItemProps } from "@/services/interface";
import { useQuery } from "@tanstack/react-query";

export default function Checkoutpage() {
  const [clientSecret, setClientSecret] = useState("");
  const { data } = useQuery<CartItemProps>({ queryKey: ["cart-items"] });
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE);

  useEffect(() => {
    fetch(`${base_url}/payment/create-payment-intent`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: data?.cartTotal }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const options: any = {
    clientSecret,
    appearance,
  };
  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
