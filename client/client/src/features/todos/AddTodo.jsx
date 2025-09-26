import React, { useState } from "react";
import { addTodos } from "./todoSlice";
import "./AddTodo.css";
import { useDispatch } from "react-redux";

function AddTodo({ onClose }) {
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState();
  const handleCreate = (e) => {
    e.preventDefault();
    if (newTitle.trim()) {
      dispatch(addTodos(newTitle));
      setNewTitle("");
      console.log("add");
      onClose();
    }
  };
  return (
    <div className="mainAdd">
      <form
        onSubmit={(e) => {
          handleCreate(e);
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
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
