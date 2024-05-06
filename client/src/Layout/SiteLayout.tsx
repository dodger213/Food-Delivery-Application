import { Outlet } from "react-router-dom";
import SiteFooter from "./SiteFooter/SiteFooter";
import SiteHeader from "./Header/SiteHeader";


export default function SiteLayout() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto h-full">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
