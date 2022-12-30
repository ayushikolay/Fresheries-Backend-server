//imports
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserDetails = require("./models/userDetails");
const SellerDetails = require("./models/sellerDetails");

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));

//database connection
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection established");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/product", require("./routes/routes"));

//---------------------------------------User Login & Signup-----------------------------------

app.post("/api/signUp", async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.cpassword;
    const email = req.body.email;

    if (password === cpassword) {
      const addingNewUser = new UserDetails({
        name: req.body.name,
        email: req.body.email,
        password: password,
        confirmPassword: cpassword,
      });

      const userEmail = await UserDetails.findOne({ email: email });
      if (!userEmail) {
        const insertData = await addingNewUser.save();
        res.status(201).send(insertData);
      } else {
        res.send("Email already exists.");
      }
    } else {
      res.send("password does not match");
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const userEmail = await UserDetails.findOne({ email: email });
    if (userEmail) {
      if (userEmail.password === password) {
        res.status(201).send(userEmail);
      } else {
        res.send("Email or Password is not correct");
      }
    } else {
      res.send("Email does not exists. Please sign up.");
    }
  } catch (e) {
    res.status(400).send("Invalid email or password");
  }
});

//-------------------Seller Registeration & Login------------------

app.post("/api/sellerSignUp", async (req, res) => {
  try {
    const password = req.body.password;
    const shopName = req.body.shopName;
    const cpassword = req.body.cpassword;
    const email = req.body.email;

    if (password === cpassword) {
      const addingNewUser = new SellerDetails({
        name: req.body.name,
        shopName: req.body.shopName,
        email: req.body.email,
        password: password,
        confirmPassword: cpassword,
      });

      const userEmail = await SellerDetails.findOne({ email: email });
      const shopNamecheck = await SellerDetails.findOne({ shopName: shopName });
      if (!userEmail) {
        if (!shopNamecheck) {
          const insertData = await addingNewUser.save();
          res.status(201).send(insertData);
        } else {
          res.send("Shop already registered.");
        }
      } else {
        res.send("Seller Email already exists.");
      }
    } else {
      res.send("password does not match");
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

app.post("/api/sellerLogin", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const userEmail = await SellerDetails.findOne({ email: email });
    if (userEmail) {
      if (userEmail.password === password) {
        res.status(201).send(userEmail);
      } else {
        res.send("Email or Password is not correct");
      }
    } else {
      res.send("Email does not exists. Please sign up.");
    }
  } catch (e) {
    res.status(400).send("Invalid email or password");
  }
});

//start server
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
