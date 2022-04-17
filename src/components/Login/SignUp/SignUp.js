import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import google from "../../../image/google.png";
import facebook from "../../../image/facebook.png";
import github from "../../../image/github.png";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "./../../../firbase.init";

const SignUp = () => {
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignup = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  const handleGithubSignup = () => {
    signInWithPopup(auth, githubProvider).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  return (
    <div>
      <form className="signup-container" action="">
        <div>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Enter Your Full Name"
              required
            />
          </div>
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
            <label htmlFor="new-password">New Password</label>
            <input
              type="email"
              name="new-password"
              id=""
              placeholder="Enter New Password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="email"
              name="confirm-password"
              id=""
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="form-submit">
            <input type="submit" value="Sign Up" />
          </div>
          <p>
            Have a Account?<Link to="/login"> LogIn</Link>
          </p>

          <div className="paralal-line">
            <hr />
            <span>or</span>
            <hr />
          </div>
          <div>
            <button onClick={handleGoogleSignup} className="external-signup">
              <img src={google} alt="" />
              <span>With Google Sign Up</span>
            </button>
            <br />
            <button className="external-signup">
              <img src={facebook} alt="" />
              <span>With Facebook Sign Up</span>
            </button>
            <br />
            <button onClick={handleGithubSignup} className="external-signup">
              <img src={github} alt="" />
              <span>With GitHub Sign Up</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
