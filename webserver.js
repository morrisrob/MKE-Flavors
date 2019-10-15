const path = require('path');
const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://***REMOVED***@cluster0-i9wli.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "mkeflavors";

var app = Express();
let database;
let collection;

app.use(BodyParser.json());

var distDir = __dirname + "/dist/";
app.use(Express.static(distDir));

MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useNewUrlParser: true }, (error, client) => {
    if (error) {
        throw error;
    }
    database = client.db(DATABASE_NAME);
    collection = database.collection("locations");

    var server = app.listen(process.env.PORT || 8080, function () {
        var port = server.address().port;
        console.log("App now running on port", port);
    });
});

// Serve static files
app.use(Express.static(__dirname + '/dist/MKE-Flavors'));
app.use(BodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/api/locations", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

// Send all requests to index.html
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname + '/dist/MKE-Flavors/index.html'));
// });

// app.listen(3000, () => {
//     MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useNewUrlParser: true }, (error, client) => {
//         if (error) {
//             throw error;
//         }
//         database = client.db(DATABASE_NAME);
//         collection = database.collection("locations");
//     });
// });

// app.post("/api/location", (request, response) => {
//     collection.insert(request.body, (error, result) => {
//         if (error) {
//             return response.status(500).send(error);
//         }
//         response.send(result.result);
//     });
// });



// app.get("/api/location/:id", (request, response) => {
//     collection.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
//         if (error) {
//             return response.status(500).send(error);
//         }
//         response.send(result);
//     });
// });


// const path = require('path');
// const Express = require('express');
// const app = Express();

// // Serve static files
// app.use(Express.static(__dirname + '/dist/MKE-Flavors'));

// // Send all requests to index.html
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname + '/dist/MKE-Flavors/index.html'));
// });

// // default Heroku port
// app.listen(process.env.PORT || 5000);