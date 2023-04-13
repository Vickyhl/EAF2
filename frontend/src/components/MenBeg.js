import React from "react";
import "../components/menBeg.css";

function MenBeg() {
  return (
    <>
      <h1 className="menAdv">A training program for a beginner exerciser</h1>

      <div className="tile-container">
        <a href="/legsMenBegExercise" className="tileAdv leg">
          <p className="tileText">1. Legs exercise</p>
        </a>

        <a href="/chestMenBegExercise" className="tileAdv chests">
          <p className="tileText">2. Chest exercise</p>
        </a>

        <a href="/backHandMenBegExercise" className="tileAdv backhand">
          <p className="tileText">3. Posterior hand exercise</p>
        </a>

        <a href="/backMenBegExercise" className="tileAdv back">
          <p className="tileText">4. Back exercise</p>
        </a>

        <a href="/shouldersMenBegExercise" className="tileAdv shoulders">
          <p className="tileText">5. Shoulders exercise</p>
        </a>

        <a href="/frontHandMenBegExercise" className="tileAdv fronthand">
          <p className="tileText">6. Forearm exercise</p>
        </a>
      </div>
    </>
  );
}

export default MenBeg;
