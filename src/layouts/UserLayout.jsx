import IconBar from "@/components/ui/iconBar/IconBar";
import Header from "@/layouts/header/Header";
import { Outlet } from "react-router-dom";
import Starter from "./starter/Starter";
import Footer from "./footer/Footer";

const UserLayout = () => {
  return (
    <>
      <Starter />
      <Header />
      <Outlet />
      {window.innerWidth > 800 && <IconBar />}
      <Footer />
    </>
  );
};

export default UserLayout;
