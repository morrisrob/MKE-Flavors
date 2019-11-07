const axios = require("axios");
const cheerio = require("cheerio");
const MongoClient = require("mongodb").MongoClient;
const CONNECTION_URL = process.env.MONGODB_URI;
const DATABASE_NAME = "mkeflavors";

let database, collection;

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
        if (item != null) {
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
              { $set: { flavors: flavorArray, descriptions: descriptionArray } }
            );
          });
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

getFlavorsDB();
