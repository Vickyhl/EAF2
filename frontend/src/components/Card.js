import React from "react";
import { useParams } from "react-router";
import StripeCheckout from "react-stripe-checkout";
import "../components/card.css";

function Card() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const userId = userData?._id;

  const url = window.location.pathname; // get the path of the current URL
  const lastWord = url.split("/").pop(); // split the path using '/' as delimiter and get the last element
  console.log(lastWord); // print the last word

  function handleToken(token) {
    console.log(token);
    //redirect to the last created menu
    if (lastWord === "regular") {
      window.location.assign(`http://localhost:3000/${userId}/menus`);
    } else {
      window.location.assign(`http://localhost:3000/recipesMenu/${lastWord}`);
    }
  }

  function handleSubmitClick(token) {
    const publishableKey =
      "pk_test_51MsU99ESZ6jwBd5mZ07t7amESyMsjXDDVhGcdVnFbdkbpb0zYVmmw4RmFI5LshKqlIkPbzGhmLSMgfE4aY8AYVx400sfpkpWyQ";

    const amount = 500; // amount in cents
    const emailInput = document.getElementById("email-input");
    const email = emailInput.value;

    const data = {
      amount: amount,
      currency: "USD",
      email: email,
      source: token.id,
    };

    fetch("http://localhost:5000/api/order/charge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        const sessionId = responseJson.id;
        const options = {
          key: publishableKey,
          amount: amount,
          token: handleToken,
          currency: "USD",
          session_id: sessionId,
        };

        const stripe = window.Stripe(publishableKey);
        stripe.redirectToCheckout(options);
      });
  }

  return (
    <div className="card-container">
      <StripeCheckout
        stripeKey="pk_test_51MsU99ESZ6jwBd5mZ07t7amESyMsjXDDVhGcdVnFbdkbpb0zYVmmw4RmFI5LshKqlIkPbzGhmLSMgfE4aY8AYVx400sfpkpWyQ"
        token={handleToken}
        amount={500}
        currency="USD"
      >
        <div className="container">
          <ul>
            <li>
              The menu is customized and created in collaboration with a
              qualified dietician.
            </li>{" "}
            <li>The use of the menu is for an unlimited time.</li>{" "}
            <li>New menu?</li>
            <li>cancelation?</li>
          </ul>
          <div className="btn-container">
            <button type="submit" className="btn">
              checkout{" "}
            </button>
          </div>
        </div>
      </StripeCheckout>
    </div>
  );
}

export default Card;
