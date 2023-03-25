import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import CreateMenu from "./CreateMenu";
import React from "react";
import UserMenus from "./UserMenus.js";
import HealthDec from "./HealthDec";
import TermsOfUse from "./TermsOfUse";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import WatchMenu from "./WatchMenu";
import Menu from "./Menu";

const Routes1 = () => {
  let userData = localStorage.getItem("user");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/HealthDec" element={<HealthDec />} />
      <Route path="/TermsOfUse" element={<TermsOfUse />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/:userId/menus" element={<UserMenus />} />
      <Route path="/watchMenu" element={<WatchMenu />} />
      <Route path="/menu/:mid" element={<Menu />} />
      <Route
        path="/login"
        element={userData === "undefined" || !userData ? <Login /> : <Home />}
      />
      <Route
        path="/createMenu"
        element={
          userData === "undefined" || !userData ? <Login /> : <CreateMenu />
        }
      />
    </Routes>
  );
};

export default Routes1;
