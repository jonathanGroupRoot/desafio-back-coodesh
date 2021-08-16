const express = require("express");
const routes = express.Router();
const authToken = require("./middleware/authenticate");

const UserController = require("./controllers/UserController.js");

routes.get("/", UserController.getMessage);
routes.post("/generateToken", UserController.generateToken);

routes.use(authToken)

routes.get("/users", UserController.listenUser);
routes.get("/user/:userId", UserController.findUser);
routes.post("/importUsers", UserController.importUsers);
routes.post("/createUser", UserController.createUser);
routes.put("/updateUser/:userId", UserController.updateUser);
routes.delete("/users/:userId", UserController.deleteUser);

module.exports = routes;