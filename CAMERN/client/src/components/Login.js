import React, { useState, useContext } from "react";
import signinpic from "../images/login2.png";
import { FcInvite, FcLock } from "react-icons/fc";
import { NavLink, useHistory } from "react-router-dom";
import { UserContext } from "../App";

const Login = () => {
  const { dispatch } = useContext(UserContext);

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Send user details to the database
  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();

    //check user login or not
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("Login Successfull");
      history.push("/");
    }
  };

  return (
    <>
      <section className="sign-in">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-image">
              <NavLink to="/signup" className="signup-image-link">
                Create an account
              </NavLink>
              <figure>
                <img src={signinpic} alt="signinpic" />
              </figure>
            </div>

            <div className="signin-form">
              <h2 className="form-title">Sign In</h2>
              <form
                method="POST"
                className="register-form"
                id="login-form"
                autoComplete="new-password"
              >
                <div className="form-group">
                  <label htmlFor="email">
                    <FcInvite />
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    required={true}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="your_pass">
                    <FcLock />
                  </label>
                  <input
                    type="password"
                    name="your_pass"
                    id="your_pass"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required={true}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    className="agree-term"
                  />
                  <label htmlFor="remember-me" className="label-agree-term">
                    <span>
                      <span></span>
                    </span>
                    Remember me
                  </label>
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log in"
                    onClick={loginUser}
                  />
                </div>
              </form>
              <div className="social-login">
                <span className="social-label">Or login with</span>
                <ul className="socials">
                  <li>
                    <NavLink to="/">
                      <i className="display-flex-center zmdi zmdi-facebook"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <i className="display-flex-center zmdi zmdi-twitter"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <i className="display-flex-center zmdi zmdi-google"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
