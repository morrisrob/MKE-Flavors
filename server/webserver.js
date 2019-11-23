const getFlavors = require("./getflavors");
const CronJob = require("cron").CronJob;
const path = require("path");
const Express = require("express");
const app = Express();
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = process.env.MONGODB_URI;
const DATABASE_NAME = "mkeflavors";
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
let database;
let collection;

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));

const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-zrnic0qj.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: "https://mkeflavors.com/api",
  issuer: `https://dev-zrnic0qj.auth0.com/`,
  algorithms: ["RS256"]
});

MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, function(
  err,
  location
) {
  if (err) {
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  database = location.db(DATABASE_NAME);
  collection = database.collection("locations");
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 4200, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

app.get("/api/locations", (request, response) => {
  collection.find({}).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result);
  });
});

app.get("/api/location/:id", checkJwt, (request, response) => {
  console.log(request.params.id);
  collection.findOne({ _id: ObjectId(request.params.id) }, function(
    error,
    result
  ) {
    console.log(result);
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result);
  });
});

app.post("/api/addLocation", checkJwt, (request, response) => {
  collection.insert(
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

app.post("/api/add-flavor", checkJwt, (request, response) => {
  let update = { $set: {} };
  update.$set = { flavorCal: { [request.body.date]: request.body.flavor } };
  console.log(update);
  collection.findOneAndUpdate(
    { _id: ObjectId(request.body.locationId) },
    update,
    function(err, result) {
      if (err) {
        response.send({ error: "An error has occurred" });
      } else {
        response.send(result);
      }
    }
  );
});

// Serve static files
app.use(Express.static(__dirname + "/dist/MKE-Flavors"));

// Send all requests to index.html
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/MKE-Flavors/index.html"));
});

new CronJob(
  "00 00 04 * * *",
  function() {
    getFlavors.getFlavorsDB();
    console.log("cron job ran");
  },
  null,
  true,
  "America/Chicago"
);
