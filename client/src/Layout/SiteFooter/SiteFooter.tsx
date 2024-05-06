import SiteBottomFooter from "./SiteBottomFooter/SiteBottomFooter";
import SiteTopFooter from "./SiteTopFooter/SiteTopFooter";

export default function SiteFooter() {
  return (
    <footer className="container mx-auto">
      <SiteTopFooter />
      <SiteBottomFooter />
    </footer>
  );
}
