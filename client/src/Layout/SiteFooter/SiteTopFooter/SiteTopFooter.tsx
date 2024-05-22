import CustomToolTip from "@/components/common/CustomToolTip";
import { FacebookIcon, InstagramIcon, Mail, MapPin, Phone, Twitter } from "lucide-react";

const socialLinks = [
  {
    title: "Instagram",
    icon: <InstagramIcon size={25} className="hover:text-primary" />,
  },
  {
    title: "Twitter",
    icon: <Twitter size={25} className="hover:text-primary" />,
  },
  {
    title: "Facebook",
    icon: <FacebookIcon size={25} className="hover:text-primary" />,
  },
];

export default function SiteTopFooter() {
  return (
    <footer>
      <div className="mt-10 space-y-4 border-b py-5 sm:flex sm:flex-wrap sm:justify-between">
        <div className="space-y-4">
          <h1 className="font-bold text-2xl">Have a Questions?</h1>
          <h2 className="flex gap-2 items-center">
            <MapPin className="hover:text-primary" /> Building No: 100 Near villa Beach, <br /> Mangalore, Karnataka{" "}
            <br /> pincode: 292929
          </h2>
          <h3 className="flex gap-2 items-center">
            <Phone className="hover:text-primary" /> +91 9867231105
          </h3>
          <h4 className="flex gap-2 items-center">
            <Mail className="hover:text-primary" /> FoodZone@gmail.com
          </h4>
          <div className="flex gap-5 pt-3">
            {socialLinks?.map((social) => (
              <CustomToolTip title={`${social.title}`} key={social.title}>
                {social.icon}
              </CustomToolTip>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="font-bold text-2xl">Menu</h1>
          <ul className="space-y-1 cursor-pointer">
            <li>Pure Veg</li>
            <li>Non Veg</li>
            <li>Pasta</li>
            <li>Rolls</li>
            <li>Burger</li>
            <li>Noodles</li>
            <li>Deserts</li>
            <li>Sandwich</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h1 className="font-bold text-2xl">About</h1>
          <ul className="space-y-2 cursor-pointer">
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h1 className="font-bold text-2xl">Legal</h1>
          <ul className="space-y-2 cursor-pointer">
            <li>Disclaimer</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
