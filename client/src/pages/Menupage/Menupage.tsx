import SiteFoodList from "@/components/Site/SiteFoodList/SiteFoodList";
import SiteMenu from "@/components/Site/SiteMenu/SiteMenu";
import { useState } from "react";


export default function Menupage() {
  const [selected, setSelected] = useState('All')
  return (
    <>
      <SiteMenu setSelectedMenu={setSelected}/>
      <SiteFoodList selected={selected}/>
    </>
  )
}
