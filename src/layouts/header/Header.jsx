import { SecondaryBtn } from "@/components/ui/btns/Btns";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

import "./header.css";
import { useState } from "react";

// a header component for the website's navbar
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // add a swipe option to open and close the navbar
  let start;
  window.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1 && window.innerWidth <= 1530) {
      start = e.touches.item(0).clientX;
    } else {
      start = null;
    }
  });

  window.addEventListener("touchend", (e) => {
    const offset = 100;
    if (start && window.innerWidth <= 1530) {
      const end = e.changedTouches.item(0).clientX;
      if (end - start > offset) {
        setIsOpen(true);
      }
      if (start - end > offset) {
        setIsOpen(false);
      }
    }
  });

  return (
    <header>
      <nav>
        <NavLink to="/" className="logo">
          Rakesh
        </NavLink>
        <NavType isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="nav-actions">
          <SecondaryBtn link="/contact">Contact</SecondaryBtn>
          {window.innerWidth <= 800 && (
            <button
              className="nav-click"
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-label="open menu"
            >
              {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

const NavType = ({ isOpen, setIsOpen }) => {
  if (window.innerWidth > 800) {
    return (
      <menu className="nav-links">
        <NavLinks />
      </menu>
    );
  } else {
    return (
      <menu className={"mobile-nav" + (isOpen ? " open" : "")}>
        <div className="mobile-nav-action">
          <p className="title">Menu</p>
          <button
            className="nav-click"
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            aria-label="close menu"
          >
            <RxCross2 />
          </button>
        </div>
        <NavLinks />
      </menu>
    );
  }
};

// a menu component to use in the header
const NavLinks = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/faqs">FAQs</NavLink>
      {/* ...add more links if want */}
    </>
  );
};

export default Header;
