import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./Layout/SiteLayout";
import Homepage from "./pages/Homepage/Homepage";
import SignupPage from "./pages/Authpage/SignupPage";
import SigninPage from "./pages/Authpage/SigninPage";
import { useAuthContext } from "./context/AuthContext";
import Menupage from "./pages/Menupage/Menupage";
import Cartpage from "./pages/Cartpage/Cartpage";
import Checkoutpage from "./pages/Checkoutpage/Checkoutpage";


export default function App() {
  const { isAuth } = useAuthContext();

  return (
    <>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/Sign-up" element={!isAuth ? <SignupPage /> : <Navigate to="/" />} />
          <Route path="/Sign-in" element={!isAuth ? <SigninPage /> : <Navigate to="/" />} />
          <Route path="/cart" element={isAuth ? <Cartpage /> : <Navigate to="/" />} />
          <Route path="/checkout" element={isAuth ? <Checkoutpage /> : <Navigate to="/" />} />
          <Route path="/menu" element={<Menupage />} />
        </Route>
      </Routes>
    </>
  );
}
