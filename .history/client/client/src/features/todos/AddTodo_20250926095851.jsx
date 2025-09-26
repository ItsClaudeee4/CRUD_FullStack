import React from "react";
import { addTodos } from "./todoSlice";
import "./AddTodo.css";

function AddTodo() {
  const handleCreate = (e) => {};
  return (
    <div>
      <form
        onSubmit={() => {
          handleCreate;
        }}
      >
        <input type="text" name="title" id="title" placeholder="add todo..." />
        <button type="button">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
