import CartSheet from "./CartSheet/CartSheet";
import Navigation from "./Navigation/Navigation";
import SearchCommand from "./SearchCommand/SearchCommand";
import UserProfile from "./UserProfile/UserProfile";


export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background">
    <nav className="flex justify-between items-center h-16 container">
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
