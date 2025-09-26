import React from "react";
import { addTodos } from "./todoSlice";
import "./AddTodo.css";

function AddTodo() {
  return (
    <div>
      <form>
        <input type="text" name="title" id="title" placeholder="add todo..." />
        <button type="button">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
