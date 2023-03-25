import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = (handleClick) => {
  let userData = localStorage.getItem("user");
  // const navigate = useNavigate();
  let isRegistred = 0;

  const logOut = () => {
    // navigate("/home");
    localStorage.clear();
  };
  handleClick = (text) => {
    console.log(text);
  };

  return (
    <ul className="nav-bar-ul">
      <div className="navbar-brand ">
        <h1>Eat & Fit</h1>
      </div>
      <li>
        <a href="home">Home</a>
      </li>
      <li className="dropdown">
        <a href="" className="dropbtn">
          My account
        </a>
        <div className="dropdown-content">
          {userData === "undefined" || !userData ? (
            <a href="/register">Register</a>
          ) : (
            <a href="home"></a>
          )}
          {userData === "undefined" || !userData ? (
            <a href="/login">Login</a>
          ) : (
            // <a href="login" onClick={(event) => handleClick(isRegistred + 1)}>
            //   Login
            // </a>
            <a href="home" onClick={logOut}>
              Logout
            </a>
          )}
        </div>
      </li>
      <li className="dropdown">
        <a href="" className="dropbtn">
          Nutrition menu
        </a>
        <div className="dropdown-content">
          <a href="/createMenu">Purches menu</a>
          <a href="/watchMenu">Watch existing menus</a>
        </div>
      </li>
      <li className="dropdown">
        <a href="" className="dropbtn">
          Grocery list
        </a>
        <div className="dropdown-content">
          <a href="#">Watch grocery list</a>
          <a href="#">Edit grocery list</a>
        </div>
      </li>
      <li className="dropdown">
        <a href="" className="dropbtn">
          Excersice plan
        </a>
        <div className="dropdown-content">
          <a href="#">Women exercise</a>
          <a href="#">Men exercise</a>
        </div>
      </li>
      <li>
        <a href="#gyms">Gym maps</a>
      </li>
      <li>
        <a href="#articles">Articles</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
    </ul>
  );
};

export default Header;
