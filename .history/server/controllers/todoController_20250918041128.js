const Todo = require("../models/todoModel");

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
const createTodo = async (req,res)=>{
    try{
        const {title}= req.body
        if(!title){
            res.status(400).jso,({message:"title required"})
        }

        const newTodo = await Todo.create({title})
        res.status(201).json({title})
    }
}
