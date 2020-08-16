import React from "react";
import styled from "@emotion/styled";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import useSiteMetadata from "../hooks/useSiteMetadata";

interface IProps {}

const Hero: React.FC<IProps> = props => {

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
    <div>
      <Image fixed={data.image.sharp.fixed} alt="Ali's profile picture" fadeIn={true} />
      <h1>{bioShort}</h1>
    </div>
  );
};

export default Hero;
