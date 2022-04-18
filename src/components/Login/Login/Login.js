import React, { useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firbase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [error, setError] = useState([]);
  console.log(email, password);

  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const setEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const setPasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleUserLogin = (event) => {
    event.preventDefault();
    if (!email) {
      setError("password don't matched");
      return;
    } else {
      signInWithEmailAndPassword(email, password);
    }
  };
  return (
    <div>
      <form onSubmit={handleUserLogin} className="form-container" action="">
        <div>
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
            <label htmlFor="password">Your Password</label>
            <input
              onBlur={setPasswordBlur}
              type="password"
              name="password"
              id=""
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="form-submit">
            <input type="submit" value="Log In" />
          </div>
          <p className="reset-pin"> Reset Your PassWord ?</p>
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
