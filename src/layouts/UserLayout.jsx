import IconBar from "@/components/ui/iconBar/IconBar";
import { useRender } from "@/contexts/RenderContext";
import Header from "@/layouts/header/Header";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  const { rendered } = useRender();
  return (
    <>
      {!rendered && <h1>hi</h1>}
      <Header />
      <Outlet />
      {window.innerWidth > 800 && <IconBar />}
    </>
  );
};

export default UserLayout;
