import SigninForm from "@/components/Forms/SigninForm";
import AuthCard from "./_component/AuthCard";
import { Link } from "react-router-dom";
import SEO from "@/Layout/SEO";


export default function SigninPage() {
  return (
    <>
      <SEO title="FoodZone | Sign In" description={"SignIn page for the FoodZone"} />
      <section className="h-screen m-auto flex justify-center items-center">
      <AuthCard authTitle={'Sign In'}>
        <SigninForm />
        <div className="flex justify-between text-sm">
            <Link to="/reset">Forgot your password?</Link>
            <Link to="/sign-up" className="text-primary">
              Are you new? Sign In
            </Link>
          </div>
      </AuthCard>
    </section>
    </>
  )
}
