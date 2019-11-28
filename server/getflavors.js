const { getCurrentDate } = require("./getCurrentDate");

const axios = require("axios");
const cheerio = require("cheerio");
const MongoClient = require("mongodb").MongoClient;
const CONNECTION_URL = process.env.MONGODB_URI;
const DATABASE_NAME = "mkeflavors";
let database, collection;

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
});

function getTodaysFlavors() {
  let today = getCurrentDate();
  let cursor = collection.find();

  cursor.each(function(err, item) {
    let flavorArray = [];
    // let descriptionArray = [];

    if (item != null && item.scrapedSite == true) {
      axios.get(item.URL).then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const selectorArray = item.flavorSelector;
        const descriptionSelectorArray = item.descriptionSelector;
        for (let i = 0; i < selectorArray.length; i++) {
          let flavor = $(selectorArray[i]).text();
          if (flavor.includes(":") === true) {
            let flavorSplit = flavor.split(":");
            flavor = flavorSplit[1].toString();
          }
          flavor = flavor.trim();
          const description = $(descriptionSelectorArray[i]).text();
          console.log(item.name + " flavor is " + flavor);
          console.log(item.name + " description is " + description);
          const flavDescripArray = [];
          flavDescripArray.push(flavor, description);
          flavorArray.push(flavDescripArray);
          // descriptionArray.push(description);
        }
        let setFlavor = {};
        setFlavor["flavorCal." + today] = flavorArray;
        collection.findOneAndUpdate(
          { name: item.name },
          {
            $set: { setFlavor }
          }
        );
      });
    }
  });
}

function moveFlavorsToTodaysFlavors() {
  let today = getCurrentDate();
  let cursor = collection.find();

  let flavors = [];
  let descriptions = [];
  cursor.each(function(err, item) {
    flavors.push(item.flavorCal[today].flavors);
    descriptions.push(item.flavorCal[today].descriptions);
    collection.findOneAndUpdate(
      { name: item.name },
      { $set: { flavors: flavors, descriptions: descriptions } }
    );
  });
}

function getFlavorsDB() {
  MongoClient.connect(
    CONNECTION_URL,
    { useNewUrlParser: true },
    (error, client) => {
      if (error) {
        throw error;
      }
      database = client.db(DATABASE_NAME);
      collection = database.collection("locations");

      var cursor = collection.find();
      cursor.each(function(err, item) {
        let flavorArray = [];
        let descriptionArray = [];
        let today = getCurrentDate();

        if (item != null) {
          if (item.scrapedSite != true) {
            if (item.flavorCal[today]) {
              let flavors = [];
              flavors.push(item.flavorCal[today]);
              collection.findOneAndUpdate(
                { name: item.name },
                { $set: { flavors: flavors } }
              );
              console.log("not scraped");
            }
          } else {
            axios.get(item.URL).then(response => {
              const html = response.data;
              const $ = cheerio.load(html);
              const selectorArray = item.flavorSelector;
              const descriptionSelectorArray = item.descriptionSelector;
              const selectorArrayLength = selectorArray.length;
              for (let i = 0; i < selectorArrayLength; i++) {
                let flavor = $(selectorArray[i]).text();
                if (flavor.includes(":") === true) {
                  let flavorSplit = flavor.split(":");
                  flavor = flavorSplit[1].toString();
                }
                flavor = flavor.trim();
                const description = $(descriptionSelectorArray[i]).text();
                console.log(item.name + " flavor is " + flavor);
                console.log(item.name + " description is " + description);
                flavorArray.push(flavor);
                descriptionArray.push(description);
              }
              collection.findOneAndUpdate(
                { name: item.name },
                {
                  $set: { flavors: flavorArray, descriptions: descriptionArray }
                }
              );
            });
          }
        } else {
          console.log("empty found");
        }
      });
    }
  );
}

module.exports = {
  getFlavorsDB
};

// getFlavorsDB();
