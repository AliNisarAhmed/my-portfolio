import React from "react";
import styled from "@emotion/styled";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";
import { useTheme } from "emotion-theming";
import useSiteMetadata from "../hooks/useSiteMetadata";

interface IProps {}

const HeroContainer = styled("section")`
  width: 100%;
  background-color: ${props => props.theme.colors.tertiary};

  grid-row: 1 / 2;
  grid-column: 1 / -1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const HeroImage = styled(Image)`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: 0.8rem solid ${props => props.theme.colors.primary};

  img {
    margin-top: 0;
  }
`;

const HeroText = styled.h1`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
`

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
    <HeroContainer>
      <HeroImage fixed={data.image.sharp.fixed} alt="Ali's profile picture" fadeIn={true} />
      <HeroText>{bioShort}</HeroText>
    </HeroContainer>
  );
};

export default Hero;
