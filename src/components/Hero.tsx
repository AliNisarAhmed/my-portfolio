import React from "react";
import styled from "@emotion/styled";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import useSiteMetadata from "../hooks/useSiteMetadata";

interface IProps {
  className: string;
}

const Hero: React.FC<IProps> = ({ className }) => {
  const { bioShort } = useSiteMetadata();

  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "ali.jpg" }) {
        sharp: childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  return (
    <section className={className}>
      <Image
        fixed={data.image.sharp.fixed}
        alt="Ali's profile picture"
        fadeIn={true}
        className="rounded-full border-4 border-blue-400"
      />
      <h1 className="text-6xl">Ali Ahmed</h1>
      <h2 className="text-center text-4">{bioShort}</h2>
    </section>
  );
};

export default Hero;
