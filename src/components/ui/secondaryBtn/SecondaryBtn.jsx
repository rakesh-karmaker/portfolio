import { NavLink } from "react-router-dom";

const SecondaryBtn = ({ children, href }) => {
  return (
    <NavLink to={href} className="secondary-btn">
      {children}
    </NavLink>
  );
};

export default SecondaryBtn;
