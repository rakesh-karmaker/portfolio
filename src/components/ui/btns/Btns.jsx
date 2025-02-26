import { NavLink } from "react-router-dom";
import "./btns.css";

const PrimaryBtn = ({ children, link }) => {
  return (
    <NavLink to={link} className="primary-btn btn">
      {children}
    </NavLink>
  );
};

const PrimaryButton = ({ children, onClick }) => {
  return (
    <button className="primary-btn btn" onClick={onClick}>
      {children}
    </button>
  );
};

const SecondaryBtn = ({ children, link }) => {
  return (
    <NavLink to={link} className="secondary-btn btn">
      {children}
    </NavLink>
  );
};

export { PrimaryBtn, PrimaryButton, SecondaryBtn };
