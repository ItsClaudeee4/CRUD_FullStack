const express = require("express");
const router = express.Router();
const {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

//get data
router.get("/", getTodo);

//create data
router.post("/add", createTodo);

//update data
router.put("/edit", updateTodo);

//delete data
router.delete("/delete", deleteTodo);
