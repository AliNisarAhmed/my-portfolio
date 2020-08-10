import React from "react";
import { Global, css } from "@emotion/core";
import styled from '@emotion/styled';
import Helmet from "react-helmet";
import Header from "./Header";
import useSiteMetadata from "../hooks/useSiteMetadata";

interface IProps {}

const StyledMain = styled.main`
  margin: 2rem auto;
  max-width: 550px;
`

const Layout: React.FC<IProps> = ({ children }) => {

  const { title, description } = useSiteMetadata();

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          * + * {
            margin-top: 1.8rem;
          }

          html,
          body {
            margin: 0;
            color: #555;
            font-family: "Segoe UI", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
            font-size: 10px;
            line-height: 1.4;

            > div {
              margin-top: 0;
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;

            + * {
              margin-top: 1rem;
            }
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 1rem;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <StyledMain>{children}</StyledMain>
    </>
  );
};

export default Layout;
