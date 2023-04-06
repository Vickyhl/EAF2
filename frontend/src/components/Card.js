import React from "react";
import StripeCheckout from "react-stripe-checkout";
import visa from "./images/visa.png";
import amex from "./images/amex.jpeg";
import discover from "./images/discover.jpeg";
import mastercard from "./images/mastercard.jpeg";
import "../components/card.css";

function Card() {
  function handleToken(token) {
    console.log(token);
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
      <div className="card-form">
        <div class="row">
          <div class="col-75">
            <div class="container">
              <form action="/action_page.php">
                <div class="row">
                  <div class="col-50">
                    <h2>Payment</h2>
                    <label for="fname">
                      <i class="fa fa-user"></i> Full Name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="firstname"
                      placeholder="John M. Doe"
                    />
                    <label for="email">
                      <i class="fa fa-envelope"></i> Email
                    </label>
                    <input
                      type="text"
                      id="email-input"
                      name="email"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div class="col-50">
                    <label for="fname">Accepted Cards</label>
                    <div class="icon-container">
                      <img src={visa} alt="Visa" />
                      <i class="fa fa-cc-visa" style={{ color: "navy" }}></i>
                      <img src={amex} alt="amex" />
                      <i class="fa fa-cc-amex" style={{ color: "blue" }}></i>
                      <img src={mastercard} alt="mastercard" />
                      <i
                        class="fa fa-cc-mastercard"
                        style={{ color: "red" }}
                      ></i>
                      <img src={discover} alt="discover" />
                      <i
                        class="fa fa-cc-discover"
                        style={{ color: "orange" }}
                      ></i>
                    </div>
                    <label for="cname">Name on Card</label>
                    <input
                      type="text"
                      id="cname"
                      name="cardname"
                      placeholder="John More Doe"
                    />
                    <label for="ccnum">Credit card number</label>
                    <input
                      type="text"
                      id="ccnum"
                      name="cardnumber"
                      placeholder="1111-2222-3333-4444"
                    />
                    <label for="expmonth">Exp Month</label>
                    <input
                      type="text"
                      id="expmonth"
                      name="expmonth"
                      placeholder="September"
                    />

                    <div class="row">
                      <div class="col-50">
                        <label for="expyear">Exp Year</label>
                        <input
                          type="text"
                          id="expyear"
                          name="expyear"
                          placeholder="2018"
                        />
                      </div>
                      <div class="col-50">
                        <label for="cvv">CVV</label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          placeholder="352"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <StripeCheckout
                  stripeKey="pk_test_51MsU99ESZ6jwBd5mZ07t7amESyMsjXDDVhGcdVnFbdkbpb0zYVmmw4RmFI5LshKqlIkPbzGhmLSMgfE4aY8AYVx400sfpkpWyQ"
                  token={handleToken}
                  amount={500}
                  currency="USD"
                >
                  <button
                    type="button"
                    className="btn"
                    onClick={handleSubmitClick}
                  >
                    Submit
                  </button>
                </StripeCheckout>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
