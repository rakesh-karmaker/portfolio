import IconBar from "@/components/ui/iconBar/IconBar";
import { useRender } from "@/contexts/RenderContext";
import Header from "@/layouts/header/Header";
import { Outlet } from "react-router-dom";
import Starter from "./starter/Starter";

const UserLayout = () => {
  return (
    <>
      <Starter />
      <Header />
      <Outlet />
      {window.innerWidth > 800 && <IconBar />}
    </>
  );
};

export default UserLayout;
