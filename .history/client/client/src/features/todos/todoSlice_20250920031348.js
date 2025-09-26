import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//backend link
const API_URL = "http://localhost:5000/api/todos";

//fetch data
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios
    .get(API_URL)
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });

  return response;
});

//add data
export const addTodos = createAsyncThunk("todos/addTodos", async (title) => {
  const response = await axios
    .post(API_URL, title)
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });

  return response;
});

//update data
export const updateTodos = createAsyncThunk(
  "todos/updateTodos",
  async ({ id, data }) => {
    const response = await axios
      .put(`${API_URL}/${id}`, data)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });

    return response;
  }
);

//delete data
export const deleteTodos = createAsyncThunk("todos/deleteTodos", async (id) => {
  const response = await axios
    .delete(`${API_URL}/${id}`)
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
});
