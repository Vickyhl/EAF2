import React, { useContext } from "react";
import homeImg from "./images/menuImg(1).jpeg";
import welcome from "./images/welcome.png";
import "./css/style.css";

const Home = () => {
  let userData = localStorage.getItem("user");

  return (
    <>
      {" "}
      <div className="container-home">
        <img className="img-fluid" src={homeImg} alt="homeImg" />
        <img className="welcome" src={welcome} />
      </div>
      {/* <img className="logo" src={logo} /> */}
    </>
  );
};

export default Home;
