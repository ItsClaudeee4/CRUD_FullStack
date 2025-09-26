import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//backend link
const API_URL = "http://localhost:5000/api/todos";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios
    .get(API_URL)
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });

  return response;
});
