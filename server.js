  var express = require("express");
  var bodyParser = require("body-parser");
  var db = require("./models");

  var app = express();
  var PORT = process.env.PORT || 8080;

  // Serve static content for the app from the "public" directory in the application directory.
  app.use(express.static("public"));

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // Set Handlebars.
  var exphbs = require("express-handlebars");

  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");

  app.use(express.static("public"));
  // Import routes and give the server access to them.
  require("./routes/burgers_controller.js")(app);

  // app.use("/", route);

  db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
