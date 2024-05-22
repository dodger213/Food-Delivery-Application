import { cn } from "@/lib/utils";
import { Cookie } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavLinks = [
  {
    name: "Home",
    href: '/'
  },
  {
    name: "Menu",
    href: "/menu"
  },
  {
    name: "Contact",
  },
];

export default function Navigation() {
  const [selected, setSelected] = useState("Home");
  return (
    <div className="flex items-center gap-20">
      <Link
        to={"/"}
        className="flex items-center gap-2"
        onClick={() => setSelected("Home")}
      >
        <Cookie />{" "}
        <span className="text-primary font-bold text-2xl">FoodZone</span>
      </Link>
      <ul className="flex items-center space-x-4">
        {NavLinks.map((link) => (
          <Link to={`${link.href}`}
            key={link.name}
            onClick={() => setSelected(link.name)}
            className={cn(
              selected === link.name && "border-b-2 border-primary",
              "cursor-pointer"
            )}
          >
            {link.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}