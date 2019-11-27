var express = require("express");
var router = express.Router();
const checkJwt = require("../middleware/checkJwt");
const ObjectId = require("mongodb").ObjectID;

const flavors = require("../controllers/flavors");

const mongo = require("../database/mongo");
let db;

mongo.connectToServer(function(err, client) {
  if (err) console.log(err);
  db = mongo.getDb();
});

router.get("/locations", (request, response) => {
  db.collection("locations")
    .find({})
    .toArray((error, result) => {
      if (error) {
        return response.status(500).send(error);
      }
      response.send(result);
    });
});

router.get("/location/:id", checkJwt.checkJwt, (request, response) => {
  console.log(request.params.id);
  db.collection("locations").findOne(
    { _id: ObjectId(request.params.id) },
    function(error, result) {
      console.log(result);
      if (error) {
        return response.status(500).send(error);
      }
      response.send(result);
    }
  );
});

router.post("/addLocation", checkJwt.checkJwt, (request, response) => {
  db.collection("locations").insert(
    [
      {
        name: request.body.name,
        address: request.body.address,
        city: request.body.city,
        state: request.body.state,
        zip: request.body.zip,
        lat: request.body.lat,
        long: request.body.long,
        URL: request.body.URL,
        flavorSelector: [request.body.flavorSelector],
        descriptionSelector: [request.body.descriptionSelector]
      }
    ],
    { safe: true },
    function(err, result) {
      if (err) {
        response.send({ error: "An error has occurred" });
      } else {
        response.send(result[0]);
      }
    }
  );
});

router.post("/add-flavor", checkJwt.checkJwt, (request, response) => {
  let flavorArray = [];
  flavorArray.push(request.body.flavor);
  let setFlavor = {};
  setFlavor["flavorCal." + request.body.date] = flavorArray;
  db.collection("locations").findOneAndUpdate(
    { _id: ObjectId(request.body.locationId) },
    { $set: setFlavor },
    { upsert: true },
    function(err, result) {
      if (err) {
        response.send({ error: "An error has occurred" });
      } else {
        response.send(result);
      }
    }
  );
});

module.exports = router;
