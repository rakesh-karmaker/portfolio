import { SecondaryBtn } from "@/components/ui/btns/Btns";
import { NavLink } from "react-router-dom";

import "./header.css";

// a header component for the website's navbar
const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" className="logo">
          Rakesh
        </NavLink>
        <NavLinks />
        <SecondaryBtn link="/contact">Contact</SecondaryBtn>
      </nav>
    </header>
  );
};

// a menu component to use in the header
const NavLinks = () => {
  return (
    <menu className="nav-links">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/faqs">FAQs</NavLink>
      {/* ...add more links if want */}
    </menu>
  );
};

export default Header;
