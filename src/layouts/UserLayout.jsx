import IconBar from "@/components/ui/iconBar/IconBar";
import Header from "@/layouts/header/Header";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <IconBar />
    </>
  );
};

export default UserLayout;
