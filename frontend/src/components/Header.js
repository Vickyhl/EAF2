import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import logo from "../components/images/logo.png";

const Header = (handleClick) => {
  let userData = localStorage.getItem("user");
  let imgStyle = {
    backgroundImage: `url(${logo})`,
  };

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
        <a href="/">
          <img className="headerImg" src={logo}></img>
        </a>
      </div>
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
          My profile
        </a>
        <div className="dropdown-content">
          <a href="/myProfile">View profile</a>
          <a href="/editProfile">Edit your profile</a>
        </div>
      </li>
      <li className="dropdown">
        <a href="" className="dropbtn">
          Nutrition menu
        </a>
        <div className="dropdown-content">
          <a href="/createMenu">Purches menu</a>
          <a href="/watchMenu">Watch existing regular menus</a>
          <a href="/watchRecipesMenu">Watch existing recipes menus</a>
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
          Exercise plan
        </a>
        <div className="dropdown-content">
          <div class="dropdown-submenu">
            <a href="#">Men exercise</a>
            <div class="dropdown-submenu-content">
              <a href="/men/beginners">Beginners</a>
              <a href="/men/advanced">Advanced</a>
            </div>
          </div>
          <div class="dropdown-submenu">
            <a href="#">Women exercise</a>
            <div class="dropdown-submenu-content">
              <a href="/women/beginners">Beginners</a>
              <a href="/women/advanced">Advanced</a>
            </div>
          </div>
        </div>
      </li>

      <li>
        <a href="/cityChoice">Gym maps</a>
      </li>
      <li>
        <a href="/articles">Articles</a>
      </li>
      <li>
        <a href="/donation">Our donation</a>
      </li>
    </ul>
  );
};

export default Header;
