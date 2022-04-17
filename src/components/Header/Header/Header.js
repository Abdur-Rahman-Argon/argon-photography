import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import "./Headre.css";
import auth from "./../../../firbase.init";
import { signOut } from "firebase/auth";

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
        <Link to="/">Home</Link>
        <Link to="/">Photos Album</Link>
        <Link to="/">Package</Link>
        <Link to="/">Cart</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">About</Link>
        {user ? (
          <button className="logout" onClick={logout}>
            Log Out
          </button>
        ) : (
          <Link to="/login">LogIn</Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
