import SecondaryBtn from "@/components/ui/secondaryBtn/SecondaryBtn";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <h1 className="logo">Rakesh</h1>
        <NavLinks />
        <SecondaryBtn href="/contact">Contact</SecondaryBtn>
      </nav>
    </header>
  );
};

const NavLinks = () => {
  return (
    <menu className="nav-links">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About me</NavLink>
      <NavLink to="/projects">Projects</NavLink>
    </menu>
  );
};

export default Header;
