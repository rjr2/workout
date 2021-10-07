const Router = require("express").Router();
const path = require("path");

Router.get("/", async (req, res) => {
   res.sendFile(path.join(__dirname + "../public/index.html"))
});

Router.get("/exercise", async (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

Router.get("/stats", async (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = Router;