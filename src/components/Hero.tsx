import React from "react";
import styled from "@emotion/styled";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";

interface IProps {}

const HeroImage = styled(Image)`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;

  img {
    margin-top: 0;
  }
`;

const Hero: React.FC<IProps> = props => {
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
    <>
      <HeroImage fixed={data.image.sharp.fixed} alt="Ali's profile picture" fadeIn={true} />
      <p>Web and Mobile Application Developer</p>
    </>
  );
};

export default Hero;
