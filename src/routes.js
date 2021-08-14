const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController.js");

routes.get("/", UserController.getMessage);
routes.get("/users", UserController.listenUser);
routes.get("/users/:userId", UserController.findUser);
routes.get("/terms", UserController.termsServices);
routes.post("/createUser", UserController.createUser);
routes.delete("/users/:userId", UserController.deleteUser);

module.exports = routes;