import React from "react";
import styled from "@emotion/styled";

interface IProps {}

const Intro: React.FC<IProps> = props => {
  return (
    <IntroContainer>
      <IntroSection>
        <div>
          <h2>About me</h2>
          <p>
            Hi there, welcome to my portfolio. I am a web and mobile developer who is really
            passionate abour programming.
          </p>
        </div>
        <div>
          <h2>Contact</h2>
          <ul>
            <li>Github</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Email</li>
          </ul>
        </div>
      </IntroSection>
    </IntroContainer>
  );
};

const IntroSection = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  justify-items: center;

  border: 1px solid red;
`;

const IntroContainer = styled.section`
  grid-column: 1/ -1;
	margin: 0 auto;
`;

export default Intro;
