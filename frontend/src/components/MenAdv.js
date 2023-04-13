import React from "react";
import "../components/menAdv.css";
import legs from "./images/frontLeg.jpeg";

function MenAdv() {
  return (
    <>
      <h1 className="menAdv">A training program for an advanced exerciser</h1>

      <div className="tile-container">
        <a href="/menAdvChest" className="tileAdv chests">
          <p className="tileText">1. Chest exercise</p>
        </a>

        <a href="/menAdvBackHand" className="tileAdv backhand">
          <p className="tileText">2. Posterior hand exercise</p>
        </a>

        <a href="/menAdvShoulders" className="tileAdv shoulders">
          <p className="tileText">3. Shoulders exercise</p>
        </a>

        <a href="/menAdvBack" className="tileAdv back">
          <p className="tileText">4. Back exercise</p>
        </a>

        <a href="/menAdvFrontHand" className="tileAdv fronthand">
          <p className="tileText">5. Forearm exercise</p>
        </a>

        <a href="/menAdvLegs" className="tileAdv leg">
          <p className="tileText">6. Legs exercise</p>
        </a>

        <a href="/menAdvShoulders" className="tileAdv shoulders">
          <p className="tileText">7. Shoulders exercise</p>
        </a>
      </div>
    </>
  );
}

export default MenAdv;
