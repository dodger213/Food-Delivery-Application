import { Button } from "@/components/ui/button";

export default function SiteHero() {
  return (
    <section className="bg-hero-pattern relative mt-10 h-[25vw] rounded-xl bg-cover bg-no-repeat opacity-90">
      <div className="animate-in absolute bottom-[30%] left-[5%] flex max-w-[50%] flex-col items-start gap-5 font-semibold text-white">
        <h2 className="hidden lg:block lg:text-4xl xl:text-6xl">The food you love right in front of your door</h2>
        <Button variant={"secondary"} size={"lg"} className="hidden lg:block">
          View More
        </Button>
      </div>
    </section>
  );
}
