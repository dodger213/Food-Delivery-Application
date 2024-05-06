import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="container mx-auto h-full">
      <Outlet />
    </main>
  );
}
