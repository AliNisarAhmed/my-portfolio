import React from "react";
import { Link } from "gatsby";

interface IProps {
  to: string;
}

const NavLink: React.FC<IProps> = ({ to, children }) => {
  return <Link to={to} className="font-bold ml-4" activeClassName=".active">{children}</Link>;
};

export default NavLink;
