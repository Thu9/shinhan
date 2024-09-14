import { Outlet, Route, Routes } from "react-router-dom";
import Main from "../pages/main";
import NavBar from "../templates/NavBar";
import Footer from "../templates/Footer";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
export const PageRouters = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  );
};
