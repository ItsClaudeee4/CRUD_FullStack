import React, { useState } from "react";
import { addTodos } from "./todoSlice";
import "./AddTodo.css";

function AddTodo() {
  const [newTitle, setNewTitle] = useState();
  const handleCreate = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form
        onSubmit={() => {
          handleCreate;
        }}
      >
        <input
          type="text"
          name="title"
          id="title"
          placeholder="add todo..."
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        />
        <button type="button">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
