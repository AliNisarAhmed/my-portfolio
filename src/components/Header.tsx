import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";

interface IProps {}

interface NavLinkProps {
  fontWeight?: string;
}

const NavLink = styled(Link)`
  color: #222;
  font-size: 2rem;
  font-weight: ${(props: NavLinkProps) => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0 1rem 0 0;
  padding: 0.75rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const StyledHeader = styled.header`
  background: #eee;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  padding: 1rem calc((100vw - 550px - 0.5rem) / 2);
`;

const StyledNav = styled.nav`
  margin-top: 0;
`;

const Header: React.FC<IProps> = props => {
  return (
    <StyledHeader>
      <NavLink to="/" fontWeight="bold">
        Ali Ahmed
      </NavLink>
      <StyledNav>
        <NavLink to="/" activeClassName="current-page">
          Home
        </NavLink>
        <NavLink to="/projects" activeClassName="current-page">
          Projects
        </NavLink>
        <NavLink to="/talks" activeClassName="current-page">
          Talks
        </NavLink>
        <NavLink to="/blog" activeClassName="current-page">
          Blog
        </NavLink>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
