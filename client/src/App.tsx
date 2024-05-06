import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./pages/Homepage/Homepage";
import SignupPage from "./pages/Authpage/SignupPage";
import SigninPage from "./pages/Authpage/SigninPage";
import { useAuthContext } from "./context/AuthContext";


export default function App() {
  const { isAuth } = useAuthContext();

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={isAuth ? <Homepage /> : <Navigate to="/Sign-in" />} />
          <Route path="/Sign-up" element={!isAuth ? <SignupPage /> : <Navigate to="/" />} />
          <Route path="/Sign-in" element={!isAuth ? <SigninPage /> : <Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}
