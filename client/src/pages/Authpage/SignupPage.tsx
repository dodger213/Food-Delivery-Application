import AuthCard from "./_component/AuthCard";
import { Link } from "react-router-dom";
import SignupForm from "@/components/Forms/SignupForm";
import SEO from "@/Layout/SEO";



export default function SignupPage() {
  return (
   <>
   <SEO title={"FoodZone | Signup"} description={"Signup page for the FoodZone"}  />
   <section className="h-screen m-auto flex justify-center items-center">
      <AuthCard authTitle={'Sign up'}>
        <SignupForm />
        <div className="flex justify-between">
            <Link to="/reset">Forgot your password?</Link>
            <Link to="/sign-in" className="text-primary">
              Already have account? Sign In
            </Link>
          </div>
      </AuthCard>
    </section>
   </>
  )
}
