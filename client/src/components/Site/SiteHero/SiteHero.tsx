import { Button } from "@/components/ui/button";

export default function SiteHero() {
  return (
    <section className="relative mt-10 bg-hero-pattern bg-no-repeat rounded-xl bg-cover h-[25vw] opacity-90">
      <div className="absolute text-white font-semibold flex flex-col items-start gap-5 max-w-[50%] bottom-[30%] left-[5%] animate-in">
        <h2 className="hidden lg:block lg:text-4xl xl:text-6xl">The food you love right in front of your door</h2>
        <Button variant={"secondary"} size={"lg"} className="hidden lg:block">
          View More
        </Button>
      </div>
    </section>
  );
}
