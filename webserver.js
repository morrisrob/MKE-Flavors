const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://***REMOVED***@cluster0-i9wli.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "mkeflavors";

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var database, collection;

// const LocationModel = MongoClient.model("location", {
//     name: String,
//     address: String,
//     city: String,
//     state: String,
//     zip: String,
//     URL: String,
//     lat: String,
//     long: String,
//     flavorSelector: String, 
//     descriptionSelector: String,
//     flavors: String,
//     descriptions: String
// });

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(3000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useNewUrlParser: true }, (error, client) => {
        if (error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("locations");
        // console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});

// app.route('/flavortest').get(function (request, response) {
//     MongoClient.connect(CONNECTION_URL, function (error, client) {
//         database = client.db(DATABASE_NAME);
//         collection = database.collection("locations");
//         var cursor = collection.find();
//         //noinspection JSDeprecatedSymbols
//         cursor.each(function (err, item) {
//             if (item != null) {
//                 str = str + "  Name  " + item.name + item.flavors + "</br>";
//                 // console.log(item.name);
//             } else {
//                 console.log('empty found');
//             }
//         });
//         response.send(str);
//         console.log(str);
//         // database.close();
//     });
// });

app.post("/api/location", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
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

app.get("/api/location/:id", (request, response) => {
    collection.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

console.log('server started');