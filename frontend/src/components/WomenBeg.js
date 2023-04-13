import React from "react";

function WomenBeg() {
  return (
    <>
      <h1 className="menAdv">A training program for a beginner exerciser</h1>

      <div className="tile-container">
        <a href="/womenBegBackLeg" className="tileAdv backLeg">
          <p className="tileText">1. Hind leg exercise</p>
        </a>

        <a href="/womenBegFrontLeg" className="tileAdv frontLeg">
          <p className="tileText">2. Front leg exercise</p>
        </a>

        <a href="/womenBegBack" className="tileAdv Back">
          <p className="tileText">3. Back exercise</p>
        </a>

        <a href="/womenBegFrontHand" className="tileAdv fronthand">
          <p className="tileText">4. Forearm exercise</p>
        </a>

        <a href="/womenBegBackHand" className="tileAdv backhand">
          <p className="tileText">5. Posterior hand exercise</p>
        </a>
      </div>
    </>
  );
}

export default WomenBeg;
