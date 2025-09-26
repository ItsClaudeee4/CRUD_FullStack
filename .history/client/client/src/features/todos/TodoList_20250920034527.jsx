import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, updateTodos, deleteTodos } from "./todoSlice";

function TodoList() {
  const dispatch = useDispatch();
  const results = useSelector((state) => {
    return state;
  });

  return <div>TodoList</div>;
}

export default TodoList;
