import React from "react";
import { Link } from "react-router-dom";
import "./Headre.css";

const Header = () => {
  return (
    <nav className="nav-container">
      <div>
        <h1 className="web-title">Argon Photography</h1>
      </div>
      <div className="nevber">
        <Link to="/">Home</Link>
        <Link to="/">Shop</Link>
        <Link to="/">Photos</Link>
        <Link to="/">Blogs</Link>
        <Link to="/">About</Link>
        <Link to="/">LogIn</Link>
      </div>
    </nav>
  );
};

export default Header;
