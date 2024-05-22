import CartSheet from "./CartSheet/CartSheet";
import Navigation from "./Navigation/Navigation";
import SearchCommand from "./SearchCommand/SearchCommand";
import UserProfile from "./UserProfile/UserProfile";


export default function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 border-b">
    <nav className="container flex h-16 items-center justify-between">
    <Navigation />
    <div className="flex items-center space-x-4">
      <SearchCommand />
      <CartSheet />
      <UserProfile />
    </div>
    </nav>
  </header>
  )
}
