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
          I am Abdur Rahman. I am graduate in HSC. Now I studying in Honours. I
          become a Full Stack WebDeveloper. My hobby is a Professional Web
          developer. I want to do any Job as a WebDeveloper. now I am hard
          Working in my Chorse. Every Day I Practice All Task and Module.
          <br />
          My target is SCLC because I Want got A job. I prepareing for job
          Interview. I create my ProtPholio very Scincerly. and I create
          External Project for Add My CV.
          <br />
          Programing-Hero Team Always help us. I want every time they are
          helping. At last We Wish That Programing-Hero every time Succes his
          Ambition
        </p>
      </div>
    </div>
  );
};

export default About;
