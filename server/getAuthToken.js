require("dotenv").config({ path: "../.env" });
const request = require("request");
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const options = {
  method: "POST",
  url: "https://dev-zrnic0qj.auth0.com/oauth/token",
  headers: { "content-type": "application/json" },
  body:
    `{"client_id":"${CLIENT_ID}","client_secret":"${CLIENT_SECRET}","audience":"https://mkeflavors.com/api","grant_type":"client_credentials"}`
};

function getAuthToken() {
    request(options, function(error, response, body) {
      if (error) throw new Error(error);
      return JSON.parse(body).access_token;
    });
}

module.exports = {
  getAuthToken
};


