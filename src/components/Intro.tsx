import React from "react";

interface IProps {
  className: string;
}

const Intro: React.FC<IProps> = ({ className }) => {
  return (
    <section className={className}>
      <div className="col-span-1 flex flex-col justify-start items-start">
        <h2 className="heading-2">About me</h2>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-12">
            Hi there, welcome to my portfolio. I am a web and mobile developer who is really
            passionate abour programming.
          </p>
        </div>
      </div>
      <div className="col-start-2 flex flex-col">
        <h2 className="heading-2">Contact</h2>
        <ul className="flex-1 flex flex-col items-center justify-center">
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
