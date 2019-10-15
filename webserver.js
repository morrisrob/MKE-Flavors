const path = require('path');
const Express = require('express');
const app = Express();
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://***REMOVED***@cluster0-i9wli.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "mkeflavors";

app.use(BodyParser.json());

let database;
let collection;

MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, function (err, location) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    // Save database object from the callback for reuse.
    database = location.db(DATABASE_NAME);
    collection = database.collection("locations");
    console.log("Database connection ready");

    // Initialize the app.
    var server = app.listen(process.env.PORT || 4200, function () {
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

app.post("/api/addLocation", function (request, response) {
    let newLocation = request.body;

    collection.insertOne(newLocation, function (err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to create new contact.");
        } else {
            res.status(201).json(doc.ops[0]);
        }
    });
});

// Serve static files
app.use(Express.static(__dirname + '/dist/MKE-Flavors'));

// Send all requests to index.html
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/MKE-Flavors/index.html'));
});


