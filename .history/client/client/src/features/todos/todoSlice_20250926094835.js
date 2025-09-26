import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//backend link
const API_URL = "http://localhost:5000/api/todos";

//fetch data
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get(API_URL);

  return response.data;
});

//add data
export const addTodos = createAsyncThunk("todos/addTodos", async (title) => {
  const response = await axios.post(API_URL, title);

  return response.data;
});

//update data
export const updateTodos = createAsyncThunk(
  "todos/updateTodos",
  async ({ id, data }) => {
    const response = await axios.put(`${API_URL}/edit${id}`, data);

    return response.data;
  }
);

//delete data
export const deleteTodos = createAsyncThunk("todos/deleteTodos", async (id) => {
  await axios.delete(`${API_URL}/delete${id}`);

  return id;
});

//Slice
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    item: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.item = action.payload;
        state.status = "succeeded";
      })
      .addCase(addTodos.fulfilled, (state, action) => {
        state.item.push(action.payload);
      })
      .addCase(updateTodos.fulfilled, (state, action) => {
        const index = state.item.findIndex((t) => t._id === action.payload._id);
        if (index !== -10) {
          state.item[index] = action.payload;
        }
      })
      .addCase(deleteTodos.fulfilled, (state, action) => {
        state.item = state.item.filter((t) => t._id !== action.payload);
      });
  },
});

export default todoSlice.reducer;
