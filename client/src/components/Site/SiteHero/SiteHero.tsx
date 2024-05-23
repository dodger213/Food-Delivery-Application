import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function SiteHero() {
  return (
    <section className="bg-hero-pattern relative mt-10 h-[25vw] rounded-xl bg-cover bg-no-repeat opacity-90">
      <div className="animate-in absolute bottom-[30%] left-[5%] flex max-w-[50%] flex-col items-start gap-5 font-semibold text-white">
        <h2 className="hidden lg:block lg:text-4xl xl:text-6xl">The food you love right in front of your door</h2>
        <Link to="/menu" className={cn(buttonVariants({variant: 'default'}), "bg-white text-black hidden lg:block")}>
          View More
        </Link>
      </div>
    </section>
  );
}
