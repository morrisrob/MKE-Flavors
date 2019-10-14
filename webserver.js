// const Express = require("express");
// const BodyParser = require("body-parser");
// const MongoClient = require("mongodb").MongoClient;
// const ObjectId = require("mongodb").ObjectID;

// const CONNECTION_URL = "mongodb+srv://***REMOVED***@cluster0-i9wli.mongodb.net/test?retryWrites=true&w=majority";
// const DATABASE_NAME = "mkeflavors";

// var app = Express();

// app.use(BodyParser.json());
// app.use(BodyParser.urlencoded({ extended: true }));

// var database, collection;

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
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

// app.get("/api/locations", (request, response) => {
//     collection.find({}).toArray((error, result) => {
//         if (error) {
//             return response.status(500).send(error);
//         }
//         response.send(result);
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

// console.log('server started');


//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/<MKE-Flavors>'));

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/MKE-Flavors/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);