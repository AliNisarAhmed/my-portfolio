import React from "react";
import Helmet from "react-helmet";
import Header from "./Header";
import useSiteMetadata from "../hooks/useSiteMetadata";

interface IProps {}

const Layout: React.FC<IProps> = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <div className="grid grid-cols-1 grid-rows-layout bg-gray-900 text-white font-sans tracking-wider">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header className="row-span-1 flex items-center p-4" />
      <main className="row-span-1 container mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
