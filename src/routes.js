const express = require("express");
const routes = express.Router();
const authToken = require("./middleware/authenticate");

const UserController = require("./controllers/UserController.js");

routes.get("/", UserController.getMessage);
routes.get("/users", authToken, UserController.listenUser);
routes.get("/user/:userId", authToken, UserController.findUser);
routes.post("/createUser", authToken, UserController.createUser);
routes.delete("/users/:userId", authToken, UserController.deleteUser);

module.exports = routes;