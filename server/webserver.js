const getFlavors = require("./getflavors");
const CronJob = require("cron").CronJob;
const path = require("path");
const Express = require("express");
const app = Express();
const BodyParser = require("body-parser");
const apiRoutes = require("./routes/apiRoutes");

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));
app.use("/api", apiRoutes);
app.use(Express.static(__dirname + "/../dist/MKE-Flavors"));
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/../dist/MKE-Flavors/index.html"));
});

const server = app.listen(process.env.PORT || 4200, function() {
  const port = server.address().port;
  console.log("App now running on port", port);
});

new CronJob(
  "00 00 04 * * *",
  function() {
    getFlavors.getFlavorsDB();
    console.log("cron job ran");
  },
  null,
  true,
  "America/Chicago"
);
