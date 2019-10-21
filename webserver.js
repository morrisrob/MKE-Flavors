const MessagingResponse = require('twilio').twiml.MessagingResponse;


const getFlavors = require("./getflavors");
const CronJob = require('cron').CronJob;


const path = require('path');
const Express = require('express');
const app = Express();
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://***REMOVED***@cluster0-i9wli.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "mkeflavors";

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));


let database;
let collection;

function Location(name, address, city, state, zip, lat, long, URL, flavorSelector, descriptionSelector, flavors, descriptions) {
    this.name = name,
        this.address = address,
        this.city = city,
        this.state = state,
        this.zip = zip,
        this.lat = lat,
        this.long = long,
        this.URL = URL
    this.flavorSelector = flavorSelector;
    this.descriptionSelector = descriptionSelector;
    this.flavors = flavors;
    this.descriptions = descriptions;
}

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

app.get("/api/locations/:id"), (request, response) => {
    collection.findById(request.params.id)
        .then(location => {
            if (!location) {
                return res.status(404).send(error)
            }
            response.send(location);
        })
}

app.post("/api/addLocation", (request, response) => {

    var location2 = request.body;
    console.log('Adding location: ' + JSON.stringify(location2));
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
                descriptionSelector: [request.body.descriptionSelector],
                }
            ], { safe: true }, function (err, result) {
            if (err) {
                response.send({ 'error': 'An error has occurred' });
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                response.send(result[0]);
            }
    });
});

// Serve static files
app.use(Express.static(__dirname + '/dist/MKE-Flavors'));

// Send all requests to index.html
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/MKE-Flavors/index.html'));
});

new CronJob('00 00 04 * * *', function () {
    getFlavors.getFlavorsDB();
    console.log('cron job ran')
}, null, true, 'America/Chicago');

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();

    twiml.message('The Robots are coming! Head for the hills!');

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
});