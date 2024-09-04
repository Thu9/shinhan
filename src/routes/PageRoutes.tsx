import { Outlet, Route, Routes } from "react-router-dom";
import Main from "../pages/main";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
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
