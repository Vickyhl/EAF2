import { config } from "dotenv";
config();
import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import HttpError from "./backend/models/httpError.js";
import menuRoutes from "./backend/routes/menuRoutes.js";
import usersRoutes from "./backend/routes/userRoutes.js";
import orderRoutes from "./backend/routes/orderRoutes.js";
import recipeRoutes from "./backend/routes/recipeRoutes.js";
import { loadStripe } from "@stripe/stripe-js";
import cors from "cors";
import User from "./backend/models/userModel.js";
import path from "path";

const app = express();
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join("public")));
app.use(bodyParser.urlencoded({ extended: true }));
// Add a route to handle requests for the favicon.ico file
app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "favicon.ico"));
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

const stripe = await loadStripe(
  "pk_test_51MsU99ESZ6jwBd5mZ07t7amESyMsjXDDVhGcdVnFbdkbpb0zYVmmw4RmFI5LshKqlIkPbzGhmLSMgfE4aY8AYVx400sfpkpWyQ"
);

app.post("/register", (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "This email id already Register" });
    } else {
      const user = new User({
        firstName,
        lastName,
        email,
        password,
      });
      user.save();
      res.send({ message: "Successfull Register" });
    }
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      console.log(user);
      if (password == user.password) {
        res.send({ message: "Login SuccessFull", user });
      } else {
        res.send({ message: "Your email or password is incorrect" });
      }
    } else {
      res.send({ message: "Your email or password is incorrectt" });
    }
  });
});

app.put("/createMenu/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  console.log(user);
  if (user) {
    user.age = req.body.age;
    user.height = req.body.height;
    user.weight = req.body.weight;
    user.gender = req.body.gender;
    user.purpuse = req.body.purpuse;
    user.health = req.body.health;
  } else {
    res.status(404);
    throw new Error("User not found");
  }
  await user.save();
  res.send({ message: "Menu created successfully" });
});

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price: "price_12345",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "https://example.com/success",
    cancel_url: "https://example.com/cancel",
  });

  res.json({ sessionId: session.id });
});

app.post("/stripe-webhook", async (req, res) => {
  const event = req.body;

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const customerEmail = session.customer_details.email;
    const paymentAmount = session.amount_total;
    const paymentMethod = session.payment_method_types[0];

    // Send email receipt to customer using SendGrid or Mailchimp
    // ...

    res.status(200).send();
  } else {
    res.status(400).send();
  }
});

app.use("/api/menus", menuRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/recipes", recipeRoutes);

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
// app.use((req, res, next) => {
//   const error = new HttpError("Could not find this route.", 404);
//   throw error;
// });

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

/*============================
        listen
=============================*/
app.listen(process.env.PORT || 5000, () => {
  console.log("Server is runing at port 5000");
});

// /*=================================
//         Database
// ===================================*/
mongoose
  .connect(`mongodb+srv://Vicky:123456EAF@eaf.rhcan5b.mongodb.net/Eat&Fit`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((err) => {
    console.log(err);
  });
