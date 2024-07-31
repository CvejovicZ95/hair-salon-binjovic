import React from "react";
import "./About.scss";

export const About = () => {
  return (
    <div className="about" id="salon">
      <div className="about-fist-section">
        <img className="img1" src="/salon1.jpeg" alt="binjovic" />
        <div className="inside-first-section">
          <h1>NAŠ SALON</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry`s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <img className="img2" src="salon2.jpeg" alt="binjovic" />
      </div>
      <img className="img3" src="salon5.jpeg" alt="binjovic" />
    </div>
  );
};
