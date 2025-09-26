import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, updateTodos, deleteTodos } from "./todoSlice";
import { useEffect } from "react";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => {
    console.log(state);
    return state;
  });
  const status = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);

  return <div>TodoList</div>;
}

export default TodoList;
