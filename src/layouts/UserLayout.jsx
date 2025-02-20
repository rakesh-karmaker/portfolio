import Header from "@/layouts/header/Header";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default UserLayout;
