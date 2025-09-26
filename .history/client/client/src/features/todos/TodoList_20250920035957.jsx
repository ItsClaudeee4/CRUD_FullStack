import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, updateTodos, deleteTodos } from "./todoSlice";
import { useEffect } from "react";
import { CiSearch } from "react-icons/ci";

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

  const handleToggle = (todo) => {
    dispatch(
      updateTodos({ id: todo._id, data: { completed: !todo.completed } })
    );
  };

  const handleDelete = (id) => {
    dispatch(deleteTodos(id));
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <form>
        <div className="input">
          <input type="text" placeholder="Search note..." />
          <div className="icon">
            <CiSearch />
          </div>
        </div>
      </form>
    </div>
  );
}

export default TodoList;
