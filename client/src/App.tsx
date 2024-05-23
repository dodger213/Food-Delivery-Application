import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./Layout/SiteLayout";
import Homepage from "./pages/Homepage/Homepage";
import SignupPage from "./pages/Authpage/SignupPage";
import SigninPage from "./pages/Authpage/SigninPage";
import { useAuthContext } from "./context/AuthContext";
import Menupage from "./pages/Menupage/Menupage";
import Cartpage from "./pages/Cartpage/Cartpage";
import Checkoutpage from "./pages/Checkoutpage/Checkoutpage";
import AdminLayout from "./Layout/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminCustomerList from "./pages/Admin/AdminCustomerList";
import AdminProductList from "./pages/Admin/AdminProductList";


export default function App() {
  const { isAuth, isAdmin } = useAuthContext();
  

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
        <Route path="/admindashboard" element={<AdminLayout />}>
          <Route index element={isAuth && isAdmin ? <AdminDashboard /> : <Navigate to="/login" />} />
          <Route path="/admindashboard/products" element={isAuth && isAdmin? <AdminProductList /> : <Navigate to="/login" />} />
          <Route path="/admindashboard/customers" element={isAuth && isAdmin ? <AdminCustomerList /> : <Navigate to="/login" />} />
        </Route>
      </Routes>
    </>
  );
}
