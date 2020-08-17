import React from "react";
import NavLink from "./NavLink";
import Logo from "./Logo";

interface IProps {
  className: string;
}

const Header: React.FC<IProps> = ({ className }) => {
  return (
    <header className={className}>
      <Logo>Ali Ahmed</Logo>
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
