import { cn } from "@/lib/utils";
import { menulist } from "@/utils/data";


interface SiteMenuProps {
  setSelectedMenu: React.Dispatch<React.SetStateAction<string>>
}


export default function SiteMenu({setSelectedMenu}: SiteMenuProps) {
  return (
    <section>
      <h1 className="text-center text-4xl font-extrabold">Select from our best menu's</h1>
      <div className="m-5 flex items-center justify-between gap-8 pt-5">
        {menulist.map((item) => (
          <div key={item.name} onClick={() => setSelectedMenu((prev) => (prev === item.name ? 'All':  item.name))}>
            <img
              src={item.image}
              alt={item.name}
              className={cn("active:scale-90 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110")}
            />
            <p className="pt-4 text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
