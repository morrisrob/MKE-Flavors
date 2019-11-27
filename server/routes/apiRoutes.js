module.exports = function(app) {
  app.get("/marky", function(req, res) {
    res.write("I am a new route");
    res.end();
  });
};
