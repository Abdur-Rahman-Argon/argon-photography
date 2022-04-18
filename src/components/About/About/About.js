import React from "react";
import Profile from "../../../image/profile.png";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="prfile-pic">
        <img src={Profile} alt="" />
      </div>

      <div className="about-detail">
        <p>
          I am Abdur Rahman. I am graduate in HSC. Nou I studying in Honours. I
          become a Full Stack WebDeveloper. My Hobby is a Profetional
          Webdeveloper. I can any Job as a WebDeveloper.
        </p>
      </div>
    </div>
  );
};

export default About;
