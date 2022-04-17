import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import google from "../../../image/google.png";
import facebook from "../../../image/facebook.png";
import github from "../../../image/github.png";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firbase.init";

const SignUp = () => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [newPassword, setNewPassword] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState([]);
  const [error, setError] = useState([]);
  console.log(name, email, newPassword, confirmPassword);

  const [signInWithGoogle, googleUser, GoogleLoading, GoogleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser] = useSignInWithGithub(auth);
  const [signInWithFacebook, FacebookUser] = useSignInWithFacebook(auth);

  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  const [createUserWithEmailAndPassword, createUser] =
    useCreateUserWithEmailAndPassword(auth);

  const handleGoogleSignup = () => {
    signInWithGoogle();
  };
  const handleGithubSignup = () => {
    signInWithGithub();
  };
  const handleFacebookSignIn = () => {
    signInWithFacebook();
  };

  const setNameBlur = (event) => {
    setName(event.target.value);
  };
  const setEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const setNewPasswordBlur = (event) => {
    setNewPassword(event.target.value);
  };
  const setConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(email, newPassword);
  };
  return (
    <div>
      <form onSubmit={handleCreateUser} className="signup-container" action="">
        <div>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input
              onBlur={setNameBlur}
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
              onBlur={setEmailBlur}
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
              onBlur={setNewPasswordBlur}
              type="password"
              name="new-password"
              id=""
              placeholder="Enter New Password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={setConfirmPasswordBlur}
              type="password"
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
