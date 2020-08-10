import { useStaticQuery, graphql } from "gatsby";

export type SiteMetadata = {
  title: string;
  description: string;
  bioShort: string;
};

const useSiteMetadata = (): SiteMetadata => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          bioShort
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
