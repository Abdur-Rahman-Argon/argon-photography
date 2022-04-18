import React from "react";
import Banner from "../Banner/Banner";
import HomeServise from "../HomeServise/HomeServise";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="container">
        <h1 className="servise-title">Servises</h1>
        <HomeServise></HomeServise>
      </div>
    </div>
  );
};

export default Home;
