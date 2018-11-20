const express = require("express");
const app = express();

const bodyParser = require("body-parser");
// mettre ma clé privé stripe entre guillemets dans les deuxièmes parenthèses
const stripe = require("stripe")("sk_test_tE1G1h6ptT7baqpOmRxs3Ztb");
const axios = require("axios");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/api/", (req, res) => {
  console.log("hello");
  if (req.body.token) {
    console.log(req.body.token);
    const { name } = req.body.token.card;
    stripe.charges.create(
      {
        amount: Number(req.body.total),
        currency: "eur",
        source: "tok_bypassPending",
        // utiliser les token de test comme celui-ci
        description: `Charge for ${name}`,
        metadata: { order_id: 6735 }
      },
      function(err, charge) {
        console.log(err, charge);
      }
    );
  } else {
    console.log("Aucun Token transmis");
  }
});

app.listen(3200, () => {
  console.log("server is up !");
});
