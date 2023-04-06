const stripe = require("stripe")(
  "sk_test_51MsU99ESZ6jwBd5mUTOc91cDs3oe2qNZ19sOdGi0sfNlQHAfPKatYyHfcP1oDzzVgdfLtaHaOTiqSkwWGUKkJNjo00Ybgq3xIN"
);

export const charge = async (req, res) => {
  try {
    const { amount, currency, source, email } = req.body;

    const charge = await stripe.charges.create({
      amount: amount,
      currency: currency,
      source: source,
      receipt_email: email,
    });

    res.status(200).json({ status: "success", charge });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", error });
  }
};
