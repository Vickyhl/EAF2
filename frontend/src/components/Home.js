import React, { useContext } from "react";
import homeImg from "./images/home.jpeg";
import "./style.css";

const Home = () => {
  let userData = localStorage.getItem("user");

  return (
    <div className="container-home">
      {/* <h2 className="username-home">Hi 👋 {userData.lastName}</h2> */}

      <img className="img-fluid" src={homeImg} alt="homeImg" />
    </div>
  );
};

export default Home;
