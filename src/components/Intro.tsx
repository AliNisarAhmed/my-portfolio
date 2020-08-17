import React from "react";
import styled from "@emotion/styled";

interface IProps {
  className: string;
}

const Intro: React.FC<IProps> = ({ className }) => {
  return (
    <section className={className}>
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
    </section>
  );
};

export default Intro;
