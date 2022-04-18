import React from "react";
import Banner from "../Banner/Banner";
import HomeServise from "../HomeServise/HomeServise";
import Footer from "../../Footer/Footer/Footer";
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
      <Footer></Footer>
    </div>
  );
};

export default Home;
