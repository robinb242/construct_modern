var express = require("express");
 var path = require("path");
 

 module.exports = function(app) {
 	app.get("/", function(req, res) {
 		res.render("home");
 	});

 	app.get("/pages/portfolio", function(req, res) {
 		res.render("portfolio");
 	});

	app.get("/pages/resume", function(req, res) {
		res.render("resume");
 	});
 }