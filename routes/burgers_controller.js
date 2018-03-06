  // var express = require("express");
  //
  // var app = express.Router();

  // Import the model (burger.js) to use its database functions.
  var db = require("../models");

  // Create all our routes and set up logic within those routes where required.
  // app.get("/", function(req, res) {
  //   burger.selectAll(function(data) {
  //     var hbsObject = {
  //       burger_name: data
  //     };
  //     //console.log("This is working...controller.js");
  //     console.log(hbsObject);
  //     res.render("index", hbsObject);
  //   });
  // });
module.exports = function(app) {

  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(burger) {
      console.log("Successfully showing all todos");
      res.json(burger);
    });
  });

}


  // app.get("/api/posts/:id", function(req, res) {
  //   db.Burger.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(burger) {
  //     console.log(burger);
  //     res.json(burger);
  //   })
  // })

  // app.post("/api/burgers", function(req, res) {
  //   //var burgerName = req.body.burger_name;
  //   burger.insertOne([
  //     "burger_name"
  //   ], [
  //     req.body.burger_name
  //   ], function(result) {
  //     // Send back the ID of the new quote
  //     //console.log("burger added ... controller.js");
  //     res.json({ burger_name: result.insertId });
  //   });
  // });

  // app.post("/api/burgers", function(req, res) {
  //   db.Burger.create({
  //     burger_name: req.body.burger_name,
  //     devoured: req.body.devoured
  //   }).then(function(burger) {
  //     console.log("Successfully added a todos");
  //     res.json(burger);
  //   })
  // })

  // app.put("/api/burgers/:id", function(req, res) {
  //   db.Burger.updateOne({
  //     req.body,
  //     where: {
  //       devoured: req.body.eat
  //     }
  //   }).then(function(burger) {
  //     console.log(burger);
  //     res.json(burger);
  //   })
  // })

  // app.put("/api/burgers/:id", function(req, res) {
  //   var condition = "id = " + req.params.id;
  //
  //   console.log("condition", condition);
  //
  //   burger.updateOne({
  //     devoured: req.body.eat
  //   }, condition, function(result) {
  //     if (result.changedRows == 0) {
  //       // If no rows were changed, then the ID must not exist, so 404
  //       return res.status(404).end();
  //     } else {
  //       console.log("burger devoured .. handlebar");
  //       res.status(200).end();
  //     }
  //   });
  // });


  // Export routes for server.js to use.
  // module.exports = app;
