import React from "react";
import "./css/Header.css";
import logo from "../components/images/appleNewIcon.png";
import "../components/css/fonts.css";

const Header = ({ handleClick }) => {
  const userData = localStorage.getItem("user");
  const parsedUserData = JSON.parse(userData || "{}");
  const isDietitian = parsedUserData.isDietitian;

  const logOut = () => {
    localStorage.clear();
  };

  return (
    <ul className="nav-bar-ul">
      <div className="navbar-brand ">
        <a href="/">
          <img className="headerImg" src={logo} alt="Eat&Fit logo"></img>
        </a>
      </div>
      <li className="dropdown">
        <a href="" className="dropbtn">
          My Account
        </a>
        <div className="dropdown-content">
          {userData === "undefined" || !userData ? (
            <a href="/register">Register</a>
          ) : (
            <a href="/home">Home</a>
          )}
          {userData === "undefined" || !userData ? (
            <a href="/login">Login</a>
          ) : (
            <a href="home" onClick={logOut}>
              Logout
            </a>
          )}
        </div>
      </li>
      {userData && (
        <li className="dropdown">
          <a href="" className="dropbtn">
            My Profile
          </a>
          <div className="dropdown-content">
            <a href="/myProfile">View profile</a>
            <a href="/editProfile">Edit your profile</a>
            <a href="/weightTrack">Weight tracking</a>
          </div>
        </li>
      )}
      {userData && (
        <li className="dropdown">
          <a href="" className="dropbtn">
            Nutrition Menu
          </a>
          <div className="dropdown-content">
            <a href="/createMenu">Purches menu</a>
            <a href="/watchMenu">Watch existing regular menus</a>
            <a href="/watchRecipesMenu">Watch existing recipes menus</a>
          </div>
        </li>
      )}
      {userData && (
        <li className="dropdown">
          <a href="" className="dropbtn">
            Grocery List
          </a>
          <div className="dropdown-content">
            <a href="/watchGrocery">Watch grocery list</a>
            <a href="/editGrocery">Edit grocery list</a>
          </div>
        </li>
      )}
      <li className="dropdown">
        <a href="" className="dropbtn">
          Exercise Plan
        </a>
        <div className="dropdown-content">
          <div class="dropdown-submenu">
            <a href="#">Men exercise &#9658;</a>
            <div class="dropdown-submenu-content">
              <a href="/men/beginners">Beginners</a>
              <a href="/men/advanced">Advanced</a>
            </div>
          </div>
          <div class="dropdown-submenu">
            <a href="#">Women exercise &#9658;</a>
            <div class="dropdown-submenu-content">
              <a href="/women/beginners">Beginners</a>
              <a href="/women/advanced">Advanced</a>
            </div>
          </div>
        </div>
      </li>
      <li>
        <a href="/cityChoice">GYM Maps</a>
      </li>
      <li>
        <a href="/articles">Articles</a>
      </li>
      <li>
        <a href="/donation">Our Donation</a>
      </li>

      {isDietitian ? (
        <li className="dropdown">
          <a href="" className="dropbtn">
            Nutrition menus{" "}
          </a>
          <div className="dropdown-content">
            <div class="dropdown-submenu">
              <a href="/showRegMenus">Watch or edit regular menus</a>
            </div>
            <div class="dropdown-submenu">
              <a href="#">Watch or edit recipe based menus</a>
            </div>
          </div>
        </li>
      ) : null}
    </ul>
  );
};

export default Header;
