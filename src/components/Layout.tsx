import React from "react";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import Helmet from "react-helmet";
import Header from "./Header";
import useSiteMetadata from "../hooks/useSiteMetadata";

interface IProps {}

const Layout: React.FC<IProps> = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <div className="container border-2 grid">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
