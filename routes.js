const express = require('express');
const client = require('./src/controller/client');

const rant = require('./src/controller/rant');


const routes = express.Router();

routes.get("/", client.main);
routes.post("/", client.create)

routes.get("/rant", rant.main);
routes.post("/rant", rant.geraHash);

routes.get("/games", (req, res) => {
    res.render("games")
});

module.exports = routes;