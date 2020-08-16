import React from "react";
import NavLink from "./NavLink";

interface IProps {}

const Header: React.FC<IProps> = props => {
  return (
    <header className="flex">
      <NavLink to="/">Ali Ahmed</NavLink>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/talks">Talks</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </nav>
    </header>
  );
};

export default Header;
