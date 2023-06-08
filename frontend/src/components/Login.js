import React, { useState, useContext } from "react";
import { AccessibilityContext } from "./AccessibilityContext";
import AccessibilityIcon from "./AccessibilityIcon";
import axios from "axios";
import "./css/Login.css";

export const Login = () => {



  const inputContainer = (props) => {

    return <><div style={{ borderRadius: 16 }}><div style={{ height: 600, width: 400, background: 'white', display: 'inline-block', justifyContent: 'center', alignItems: 'center' }}>

    </div><div style={{ height: 600, width: 400, background: 'blue', display: 'inline-block', justifyContent: 'center', alignItems: 'center', backgroundImage: 'url("https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

      </div></div></>
  }




  const { fontSize, readableText, contrast } = useContext(AccessibilityContext);
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
    console.log(user);
    await axios
      .post("https://eatandfit-api.onrender.com/api/users/login", user)
      .then((res) => {
        console.log(res.data.existingUser);
        if (res.data.existingUser) {
          window.location.assign("/home");
          localStorage.setItem("user", JSON.stringify(res.data.existingUser));
        } else {
          setErrorMessage(true);
        }
      });
  };

  const closeModal = () => {
    setErrorMessage(false);
  };

  return (
    <>
      <AccessibilityIcon />
      <div style={{ marginTop: 100, display: 'flex', flexDirection: 'row', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ borderRadius: 16 }}>
          <div style={{ height: 600, width: 400, background: 'white', display: 'table-cell', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ fontSize: 24, marginTop: 0, padding: 24 }}>Welcome back</h1>
            <br />
            <form>
              <label htmlFor="email">Email</label>
              <input
                style={{ border: '1px solid gray', borderRadius: 4 }}
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />

              <label htmlFor="password">Password</label>
              <input
                style={{ border: '1px solid gray', borderRadius: 4 }}
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
              <a href="/ForgotPassword" className="link-Forgot-Password">
                Forgot Password?
              </a>
              <div className="btn-container">
                <button className="btn" onClick={handleSubmit}>
                  Login
                </button>
              </div>
            </form>

            {errorMessage && (
              <div className="modal hidden">
                <div className="flex">
                  <button className="btn-close" onClick={closeModal}>
                    ⨉
                  </button>
                  <div className="modal-text">
                    Your email or password is incorrect
                  </div>
                  <button className="btn-ok" onClick={closeModal}>
                    Okay
                  </button>
                </div>
              </div>
            )}
            <div className="overlay hidden"></div>
          </div><div style={{ height: 600, width: 400,borderTopRightRadius:16,borderBottomRightRadius:16 ,display: 'table-cell', justifyContent: 'center', alignItems: 'center', backgroundImage: 'url("https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

          </div></div>

      </div>
    </>
  );
};

export default Login;
