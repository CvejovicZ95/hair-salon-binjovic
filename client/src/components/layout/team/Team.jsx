import React from "react";
import "./Team.scss";

export const Team = () => {
  return (
    <div className="team" id="team">
      <h1>NAŠ TIM</h1>
      <div className="about-team">
        <img
          className="binjovic-logo"
          src="/binjovic-logo.png"
          alt="logo"
          width={"180px"}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad
          blanditiis repudiandae id? Animi accusamus illum error dolor,
          praesentium modi.
        </p>
        <div className="team-images">
          <img src="/tim1.jpg" alt="team" />
          <img src="/tim2.jpg" alt="team" />
        </div>
      </div>
    </div>
  );
};
