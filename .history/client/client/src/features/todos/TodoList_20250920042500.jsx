import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, updateTodos, deleteTodos } from "./todoSlice";
import { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import "./TodoList.css";

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
      {status === "loading" && <p>loading data...</p>}
      {status === "succeeded" && todos.length === 0 && <p>no data yet</p>}
      <form>
        <div className="input">
          <input type="text" placeholder="Search note..." />
          <div className="icon">
            <CiSearch />
          </div>
        </div>
        <main>
          {todos.map((todo) => (
            <div className="card" key={todo._id}>
              <span
                onClick={() => {
                  handleToggle(todo);
                }}
                style={{
                  textDecoration: `${todo.completed ? "line-through" : "none"}`,
                  cursor: "pointer",
                }}
              >
                {todo.title}
              </span>
              <div
                className="delete"
                onClick={() => {
                  handleDelete(todo._id);
                }}
              >
                <MdDelete />
              </div>
            </div>
          ))}
        </main>
      </form>
    </div>
  );
}

export default TodoList;
