import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface IProps {
  className: string;
}

const Intro: React.FC<IProps> = ({ className }) => {
  return (
    <section className={className}>
      <div className="col-span-1 flex flex-col justify-start items-center">
        <h2 className="heading-2">About me</h2>
        <div className="flex items-center justify-center pt-16 w-3/4">
          <p className="text-12">
            Hi there, welcome to my portfolio. I build web & mobile applications, and I love
            Computer Programming.
          </p>
        </div>
      </div>
      <div className="col-start-2 flex flex-col items-baseline">
        <h2 className="heading-2">Contact</h2>
        <div className="flex-1 w-3/4 self-end pt-8">
          <ul className="flex-1 flex flex-col justify-center items-start">
            <li className="hover:text-blue-500 transition-colors duration-150">
              <FontAwesomeIcon icon={faGithub} className="mr-4" />
              Github
            </li>
            <li className="hover:text-blue-500 transition-colors duration-150">
              <FontAwesomeIcon icon={faTwitter} className="mr-4" />
              Twitter
            </li>
            <li className="hover:text-blue-500 transition-colors duration-150">
              <FontAwesomeIcon icon={faLinkedin} className="mr-4" />
              LinkedIn
            </li>
            <li className="hover:text-blue-500 transition-colors duration-150">
              <FontAwesomeIcon icon={faEnvelope} className="mr-4" />
              Email
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intro;
