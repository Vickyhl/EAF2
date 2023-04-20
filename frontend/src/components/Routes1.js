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
import Menu from "./Menu";
import RecipesMenu from "./RecipesMenu";
import WatchRecipesMenu from "./WatchRecipesMenu";
import Recipe from "./Recipe";
import MenuList from "./MenuList";
import Snack from "./Snack";
import Card from "./Card";
import CheckoutForm from "./CheckoutForm";
import Receipt from "./Receipt";
import About from "./About";
import MenBeg from "./MenBeg";
import LegsExMenBeg from "./LegsExMenBeg";
import MenAdv from "./MenAdv";
import ChestExMenBeg from "./ChestExMenBeg";
import BackHandMenBegEx from "./BackHandMenBegEx";
import BackMenBegEx from "./BackMenBegEx";
import ShouldersMenBegEx from "./ShouldersMenBegEx";
import FrontHandMenBegEx from "./FrontHandMenBegEx";
import MenAdvChest from "./MenAdvChest";
import MenAdvBackHand from "./MenAdvBackHand";
import MenAdvShoulders from "./MenAdvShoulders";
import MenAdvBack from "./MenAdvBack";
import MenAdvFrontHand from "./MenAdvFrontHand";
import MenAdvLegs from "./MenAdvLegs";
import WomenBeg from "./WomenBeg";
import WomenAdv from "./WomenAdv";
import WomenBegBackLeg from "./WomenBegBackLeg";
import WomenBegFrontLeg from "./WomenBegFrontLeg";
import WomenBegBack from "./WomenBegBack";
import WomenBegFrontHand from "./WomenBegFrontHand";
import WomenBegBackHand from "./WomenBegBackHand";

import WomenAdvBackLeg from "./WomenAdvBackLeg";
import WomenAdvFrontLeg from "./WomenAdvFrontLeg";
import WomenAdvBack from "./WomenAdvBack";
import WomenAdvFrontHand from "./WomenAdvFrontHand";
import WomenAdvBackHand from "./WomenAdvBackHand";
import WomenAdvBackLeg2 from "./WomenAdvBackLeg2";
import Donation from "./Donation";
import Articles from "./Articles";
import Contact from "./Contact";
import CityChoice from "./CityChoice.js";
import GymMaps from "./GymMaps";
import Profile from "./Profile";
import EditProfile from "./EditProfile";

const Routes1 = () => {
  let userData = localStorage.getItem("user");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myProfile" element={<Profile />} />
      <Route path="/HealthDec" element={<HealthDec />} />
      <Route path="/TermsOfUse" element={<TermsOfUse />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/:userId/menus" element={<UserMenus />} />
      <Route path="/watchMenu" element={<MenuList />} />
      <Route path="/menu/:mid" element={<Menu />} />
      <Route path="/recipesMenu/:mid" element={<RecipesMenu />} />
      <Route path="/recipe/:rid" element={<Recipe />} />
      <Route path="/watchRecipesMenu" element={<WatchRecipesMenu />} />
      <Route path="/watchSnack/:type" element={<Snack />} />
      <Route path="/checkout" element={<CheckoutForm />} />
      <Route path="/card/:t" element={<Card />} />
      <Route path="/receipt/:type" element={<Receipt />} />
      <Route path="/About" element={<About />} />
      <Route path="/donation" element={<Donation />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/contactUs" element={<Contact />} />
      <Route path="/cityChoice" element={<CityChoice />} />
      <Route path="/gymMaps/:country/:city" element={<GymMaps />} />
      <Route path="/editProfile" element={<EditProfile />} />

      <Route path="/men/beginners" element={<MenBeg />} />
      <Route path="/men/advanced" element={<MenAdv />} />
      <Route path="/women/beginners" element={<WomenBeg />} />
      <Route path="/women/advanced" element={<WomenAdv />} />

      <Route path="/legsMenBegExercise" element={<LegsExMenBeg />} />
      <Route path="/chestMenBegExercise" element={<ChestExMenBeg />} />
      <Route path="/backHandMenBegExercise" element={<BackHandMenBegEx />} />
      <Route path="/backMenBegExercise" element={<BackMenBegEx />} />
      <Route path="/shouldersMenBegExercise" element={<ShouldersMenBegEx />} />
      <Route path="/frontHandMenBegExercise" element={<FrontHandMenBegEx />} />

      <Route path="/menAdvChest" element={<MenAdvChest />} />
      <Route path="/menAdvBackHand" element={<MenAdvBackHand />} />
      <Route path="/menAdvShoulders" element={<MenAdvShoulders />} />
      <Route path="/menAdvBack" element={<MenAdvBack />} />
      <Route path="/menAdvFrontHand" element={<MenAdvFrontHand />} />
      <Route path="/menAdvLegs" element={<MenAdvLegs />} />

      <Route path="/womenBegBackLeg" element={<WomenBegBackLeg />} />
      <Route path="/womenBegFrontLeg" element={<WomenBegFrontLeg />} />
      <Route path="/womenBegBack" element={<WomenBegBack />} />
      <Route path="/womenBegFrontHand" element={<WomenBegFrontHand />} />
      <Route path="/womenBegBackHand" element={<WomenBegBackHand />} />

      <Route path="/womenAdvBackLeg" element={<WomenAdvBackLeg />} />
      <Route path="/womenAdvFrontLeg" element={<WomenAdvFrontLeg />} />
      <Route path="/womenAdvBack" element={<WomenAdvBack />} />
      <Route path="/womenAdvFrontHand" element={<WomenAdvFrontHand />} />
      <Route path="/womenAdvBackHand" element={<WomenAdvBackHand />} />
      <Route path="/womenAdvBackLeg2" element={<WomenAdvBackLeg2 />} />

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
