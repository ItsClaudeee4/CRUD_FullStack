import React from "react";
import { addTodos } from "./todoSlice";

function AddTodo() {
  return (
    <div>
      <form>
        <input type="text" name="title" id="title" placeholder="add todo..." />
      </form>
    </div>
  );
}

export default AddTodo;
