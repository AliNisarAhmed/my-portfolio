import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";

interface IProps {}

interface NavLinkProps {
  fontWeight?: string;
}

const StyledHeader = styled.header`
  background: ${props => props.theme.colors.primary};
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.secondary};
  height: ${props => props.theme.heights.navbarHeight};
`;

const NavLink = styled(Link)`
  font-size: 2rem;
  color: ${props => props.theme.colors.secondary};
  font-weight: ${(props: NavLinkProps) => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0 1rem 0 0;
  padding: 0.75rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid ${props => props.theme.colors.secondary};
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const StyledNav = styled.nav`
  margin-top: 0;
`;

const Logo = styled(Link)`
  color: ${props => props.theme.colors.secondary};
  font-size: 4rem;
  font-weight: "bold";
  line-height: 1;
  text-decoration: none;
  margin-right: auto;
`


const Header: React.FC<IProps> = props => {
  return (
    <StyledHeader>
      <Logo to="/">
        Ali Ahmed
      </Logo>
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
