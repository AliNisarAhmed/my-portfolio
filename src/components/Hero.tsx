import React from "react";
import styled from "@emotion/styled";

interface IProps {}

const HeroImage = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
`;

const HeroImageContainer = styled.div`
	border: 1rem solid black;
	border-radius: 50%;
	width: 11rem;
	height: 11rem;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Hero: React.FC<IProps> = props => {
  return (
		<>
		<HeroImageContainer>
			<HeroImage src="./Ali.jpg" />
		</HeroImageContainer>
		<p>Web and Mobile Application Developer</p>
		</>
	);
};

export default Hero;
