const Todo = require("../models/todoModel");

//GET
const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.statue(500).json({ message: "error in finding" });
  }
};
