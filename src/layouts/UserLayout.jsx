import IconBar from "@/components/ui/iconBar/IconBar";
import Header from "@/layouts/header/Header";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {window.innerWidth > 800 && <IconBar />}
    </>
  );
};

export default UserLayout;
