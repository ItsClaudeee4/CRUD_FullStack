const Todo = require("../models/todoModel").default;

//GET data
const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: "error in finding" });
  }
};

//CREATE data
const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      res.status(400).jso, { message: "title required" };
    }

    const newTodo = await Todo.create({ title });
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ message: "error in creating data" });
  }
};

//UPDATE data
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true }
    );

    if (!updateTodo) {
      res.status(404).json({ message: "no data to update" });
    }
    res.json(updateTodo);
  } catch (err) {
    res.status(500).json({ message: "error in updating" });
  }
};
