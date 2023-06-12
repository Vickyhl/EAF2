import React, { useState, useContext } from "react";
import { AccessibilityContext } from "./AccessibilityContext";
import AccessibilityIcon from "./AccessibilityIcon";
import axios from "axios";
import Loader from "./Loader";
import "./css/Login.css";

export const Login = () => {
  const { fontSize, readableText, contrast } = useContext(AccessibilityContext);
  const [isLoading, setIsLoading] = useState(false); // New loading state
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true

    const result = await axios.post(
      "https://eatandfit-api.onrender.com/api/users/login",
      user
    );
    if (result.data.message === "Your email or password is incorrect") {
      setErrorMessage("Your email or password is incorrect");
    } else if (result.data.existingUser) {
      localStorage.setItem("user", JSON.stringify(result.data.existingUser));
      window.location.assign("/home");
    }
    setIsLoading(false);
  };

  return (
    <>
      <AccessibilityIcon />
      <div
        className={`login ${fontSize} ${
          readableText ? "readableText" : ""
        } login-${contrast}`}
      >
        <div style={{ borderRadius: 16, height: 400 }}>
          <div className="login-background">
            <h1 style={{ fontSize: 24, marginTop: 0, padding: 24 }}>Welcome</h1>
            <br />
            {isLoading && <Loader />}
            <form>
              <input
                className="login-input"
                type="email"
                id="email"
                name="email"
                value={user.email}
                placeholder="Email"
                onChange={handleChange}
              />

              <input
                className="login-password-input"
                type="password"
                id="password"
                name="password"
                value={user.password}
                placeholder="Password"
                onChange={handleChange}
              />
              {errorMessage && (
                <div className="validationError">{errorMessage}</div>
              )}

              <a href="/ForgotPassword" className="link-Forgot-Password">
                Forgot Password?
              </a>
              <div className="btn-container">
                <button className="btn" onClick={handleSubmit}>
                  Login
                </button>
              </div>
            </form>
          </div>
          <div
            style={{
              height: 550,
              width: 400,
              borderTopRightRadius: 16,
              borderBottomRightRadius: 16,
              display: "table-cell",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage:
                'url("https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Login;
