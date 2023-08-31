const express = require("express");

const routes = express.Router();

const UserController = require("./controllers/UserController");
const ProjectController = require("./controllers/ProjectsController")

routes
    //Users
  .get("/users", UserController.index)
  .get("/users/:id", UserController.show)
  .post("/users", UserController.create)
  .put("/users/:id", UserController.update)
  .delete("/users/:id", UserController.delete)

  //Projects
  .get("/projects",ProjectController.index)
  .post("/projects",ProjectController.create)



module.exports = routes;
