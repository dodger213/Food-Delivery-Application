import { FormEvent, useEffect, useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// refernece :
//https://docs.stripe.com/payments/quickstart?lang=node&client=react


export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173",
      }
    });

 

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      toast.error("Payment failed. Please again later.")
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
    
  };



  return (
    <section className="flex h-[75vh]" onSubmit={handleSubmit}>
      <form className="m-auto size-[450px] space-y-10 border p-10">
        <h1 className="text-center text-xl font-bold">Payment Method</h1>
        <PaymentElement />
        <Button disabled={isLoading || !stripe || !elements} type="submit" className="w-full">
        {isLoading ? 'Loading...' : "Pay now"}
        </Button>
        {message && <div className="text-red-400">{message}</div>}
      </form>
    </section>
  );
}
