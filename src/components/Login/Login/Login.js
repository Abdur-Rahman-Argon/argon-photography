import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <form className="form-container" action="">
        <div>
          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Your Password</label>
            <input
              type="email"
              name="password"
              id=""
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="form-submit">
            <input type="submit" value="Log In" />
          </div>
          <p> Reset Your PassWord ?</p>
          <hr />
          <button className="creat-account">
            <Link to="/signup">Create New Account</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
