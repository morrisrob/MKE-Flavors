const ObjectId = require("mongodb").ObjectID;
const mongo = require("../database/mongo");
let db;

mongo.connectToServer(function(err, client) {
  if (err) console.log(err);
  db = mongo.getDb();
});

let displayLocations = () => {
  new Promise((resolve, reject) => {
    db.collection("locations")
      .find({})
      .toArray((error, result) => {
        if (error)
          return status(500)
            .send(error)

            .then(result);
      });
  });
};

// let displayLocations = () => {
//   db.collection("locations")
//     .find({})
//     .toArray((error, result) => {
//       if (error) {
//         return status(500).send(error);
//       }
//       return result;
//     });
// };

module.exports = { displayLocations };
