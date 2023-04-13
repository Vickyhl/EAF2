import React from "react";

function WomenAdv() {
  return (
    <>
      <h1 className="menAdv">A training program for a advanced exerciser</h1>

      <div className="tile-container">
        <a href="/womenAdvBackLeg" className="tileAdv backLeg">
          <p className="tileText">1. Hind leg exercise</p>
        </a>

        <a href="/womenAdvFrontLeg" className="tileAdv frontLeg">
          <p className="tileText">2. Front leg exercise</p>
        </a>

        <a href="/womenAdvBack" className="tileAdv Back">
          <p className="tileText">3. Back exercise</p>
        </a>

        <a href="/womenAdvFrontHand" className="tileAdv fronthand">
          <p className="tileText">4. Forearm exercise</p>
        </a>

        <a href="/womenAdvBackHand" className="tileAdv backhand">
          <p className="tileText">5. Posterior hand exercise</p>
        </a>

        <a href="/womenAdvBackLeg2" className="tileAdv backLeg">
          <p className="tileText">6. Hind leg exercise</p>
        </a>
      </div>
    </>
  );
}

export default WomenAdv;
