import SiteHero from "@/components/Site/SiteHero/SiteHero";
import SiteRecentlyAdded from "@/components/Site/SiteRecentlyAdded/SiteRecentlyAdded";
import SiteTopNonVeg from "@/components/Site/SiteTopNonVeg/SiteTopNonVeg";
import SiteTopVeg from "@/components/Site/SiteTopVeg/SiteTopVeg";


export default function Homepage() {
  return (
    <>
      <SiteHero />
      <SiteRecentlyAdded />
      <SiteTopVeg />
      <SiteTopNonVeg />
    </>
  )
}
