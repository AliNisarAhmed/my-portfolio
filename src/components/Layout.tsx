import React from "react";
import { Global, css } from "@emotion/core";
import styled from '@emotion/styled';
import Helmet from "react-helmet";
import Header from "./Header";
import useSiteMetadata from "../hooks/useSiteMetadata";
import { ThemeProvider } from 'emotion-theming';
import { theme } from "../theme";

interface IProps {}

const StyledMain = styled.main`
  margin-top: 0;
  height: calc(100vh - ${props => props.theme.heights.navbarHeight});

  display: grid;
  grid-template-rows: 3fr 2fr;
  grid-template-columns: 1fr 1fr;
`

const Layout: React.FC<IProps> = ({ children }) => {

  const { title, description } = useSiteMetadata();

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          html,
          body {
            margin: 0;
            color: ${theme.colors.primary};
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
            color: ${theme.colors.primary};
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
    </ThemeProvider>
  );
};

export default Layout;
