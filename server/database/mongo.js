const MongoClient = require("mongodb").MongoClient;
const CONNECTION_URL = process.env.MONGODB_URI;
const DATABASE_NAME = "mkeflavors";
let _db;

module.exports = {
  connectToServer: function(callback) {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, function(
      err,
      client
    ) {
      _db = client.db(DATABASE_NAME);
      console.log("Mongo connected");
      return callback(err);
    });
  },

  getDb: function() {
    return _db;
  }
};
