const axios = require('axios');
const cheerio = require('cheerio');
// const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
// const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://***REMOVED***@cluster0-i9wli.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "mkeflavors";

var database, collection;
let locations = [];



let addLocations = () => {
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

    const kopps = new Location('Kopps Brookfield', '10700 W. Bluemound', 'Brookfield', 'WI', '53186', '43.036800', '-88.147370', 'http://www.kopps.com', ['#page > div.wrap.todays-flavors-wrap.home-flavors > div:nth-child(1) > div:nth-child(1) > h3', '#page > div.wrap.todays-flavors-wrap.home-flavors > div:nth-child(1) > div:nth-child(2) > h3'], ['#page > div.wrap.todays-flavors-wrap.home-flavors > div:nth-child(1) > div:nth-child(1) > p', '#page > div.wrap.todays-flavors-wrap.home-flavors > div:nth-child(1) > div:nth-child(2) > p'], [], []);
    const murfs = new Location('Murfs Waukesha', '1234 Shady Lane', 'Waukesha', 'WI', '53222', '43.002930', '-88.186810', 'http://murfsfrozencustard.com', ['#flavorContainer > div.homeFlavorBlockLower > div.homeFlavorOfTheDay > div > div > div.flavorOfDayImg > div > span.flavorOfDayWhiteSpan'], ['#flavorContainer > div.homeFlavorBlockLower > div.homeFlavorOfTheDay > div > div > span'], ['#flavorContainer > div.homeFlavorBlockLower > div.homeFlavorOfTheDay > div > div > span'], []);
    const culversSunset = new Location('Culvers Waukesha - Sunset', '111 Sunset', 'Waukesha', 'WI', '53186', '42.988580', '-88.246880', 'https://www.culvers.com/restaurants/waukesha-sunset', ['#container > main > div:nth-child(3) > div:nth-child(2) > div > div > div.ModuleRestaurantDetail-main > div > div:nth-child(1) > div:nth-child(1) > div.ModuleRestaurantDetail-fotd > h2 > strong'], [], [], [])
    const leducs = new Location('Leducs', '240 W. Summit Ave', 'Wales', 'WI', '53183', '43.012870', '-88.382610', 'http://leducscustard.com', ['#text-block-11 > h3:nth-child(5)'], [], [], []);
    
    locations.push(kopps);
    locations.push(murfs);
    locations.push(culversSunset);
    locations.push(leducs);
}

function getFlavors(i) {
    axios.get(locations[i].URL)
        .then(response => {
            console.log(locations[i].name);
            const html = response.data;
            const $ = cheerio.load(html);
                let j = 0;
                for (j = 0; j < locations[i].flavorSelector.length; j++) {
                    const flavor = $(locations[i].flavorSelector[j]).text();
                    locations[i].flavors.push(flavor)
                    console.log(flavor);
                }
        })
        .catch(error => {
            console.log(error);
        })
}

function getFlavorsDB() {
    MongoClient.connect(CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true }, (error, client) => {
        if (error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("locations");
        var cursor = collection.find();
        //noinspection JSDeprecatedSymbols
        cursor.each(function (err, item) {
            let flavorArray = [];
            let descriptionArray = [];
            if (item != null) {
                axios.get(item.URL)
                    .then(response => {
                        const html = response.data;
                        const $ = cheerio.load(html)
                        const selectorArray = item.flavorSelector;
                        const descriptionSelectorArray = item.descriptionSelector;
                        const selectorArrayLength = selectorArray.length;
                        for (let i = 0; i < selectorArrayLength; i++) {
                            let flavor = $(selectorArray[i]).text();
                            if (flavor.includes(':') === true) {
                                let flavorSplit = flavor.split(':');
                                flavor = flavorSplit[1].toString();
                            }
                            flavor = flavor.trim();
                            const description = $(descriptionSelectorArray[i]).text();
                            console.log(item.name + " flavor is " + flavor);
                            console.log(item.name + " description is " + description)
                            flavorArray.push(flavor);
                            descriptionArray.push(description);
                        }
                        collection.findOneAndUpdate(
                            { name: item.name },
                            { $set: { flavors: flavorArray, descriptions: descriptionArray } },
                        )
                    })
            } else {
                console.log('empty found');
            }
        });
    })
}

fixOscars = (flavor) => {
    let arraySplit = flavor.split(':');
    fixedFlavor = arraySplit[1].toString();
    return fixedFlavor;
}

const addToDb = () => {
    MongoClient.connect(CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true }, (error, client) => {
        if (error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("locations");
        console.log("Connected to `" + DATABASE_NAME + "`!");
        collection.insert(locations);
    })
}

const updateFlavor = (name, flavor, description) => {
    MongoClient.connect(CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true }, (error, client) => {
        if (error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("locations");

        console.log(collection)

        console.log(flavor);
        collection.findOneAndUpdate(
            { name: name}, 
            { $set: {flavors: flavor, description: description}},
        )
    })
    console.log('flavors updated!')
}

const getLocationDB = () => {
    MongoClient.connect(CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true }, (error, client) => {
        if (error) {
            throw error;
        }
        let database = client.db(DATABASE_NAME);
        let collection = database.collection("locations");

        collection.find({}).toArray((error, result) => {
            if (error) {
                return response.status(500).send(error);
            }
            console.log(result);
        });
    })
}

const flavorsLoop = () => {
    for (let i = 0; i < locations.length; i++) {
        getFlavors(i);
    }
}

const dropCollection = () => {
    database = client.db(DATABASE_NAME);
    collection = database.collection("locations");
    database.collection("locations").drop(function (err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        database.close();
    });
}

// function runApp() {
//     addLocations();
//     addToDb();
// //     // setTimeout(dropCollection, 5000);
    
// //     flavorsLoop();
// //     setTimeout(addToDb, 5000);
// //     setTimeout(outputDBtoConsole, 5000);
// //     getFromDb();
// //     getLocationDB();
// }

// runApp();

// updateFlavor("Kopps", ['Flavor 3']);

// addLocations();
// addToDb()

module.exports = {
    getFlavorsDB,
}

getFlavorsDB();