import React from "react";
import { Link } from "react-router-dom";
import "./Headre.css";

const Header = () => {
  return (
    <nav className="nav-container">
      <div>
        <h1 className="web-title">
          <Link to="/">Argon Photography</Link>
        </h1>
      </div>
      <div className="nevber">
        <Link to="/">Home</Link>
        <Link to="/">Photos Album</Link>
        <Link to="/">Package</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">About</Link>
        <Link to="/login">LogIn</Link>
      </div>
    </nav>
  );
};

export default Header;
