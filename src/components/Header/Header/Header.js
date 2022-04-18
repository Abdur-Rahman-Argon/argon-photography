import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Headre.css";
import auth from "./../../../firbase.init";
import { signOut } from "firebase/auth";
import CustomLink from "../../Shared/CustomLink/CustomLink";
import { Link } from "react-router-dom";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <nav className="nav-container">
      <div>
        <h1 className="web-title">
          <Link to="/">Argon Photography</Link>
        </h1>
      </div>
      <div className="nevber">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/service">Services</CustomLink>
        <CustomLink to="/photosalbum">Photos-Album</CustomLink>
        <CustomLink to="/checkout">Checkout</CustomLink>
        <CustomLink to="/blogs">Blogs</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        {user ? (
          <button className="logout" onClick={logout}>
            Log Out
          </button>
        ) : (
          <CustomLink to="/login">LogIn</CustomLink>
        )}
      </div>
    </nav>
  );
};

export default Header;
