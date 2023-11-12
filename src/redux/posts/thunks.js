import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://rustem-writer-api.onrender.com";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/api/posts");
      return res.data;
    } catch (error) {
      toast.error("Error while loadin posts: " + error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ title, text, date }, thunkAPI) => {
    try {
      const response = await axios.post("/api/tasks", {
        title,
        text,
        date,
      });
      return response.data;
    } catch (error) {
      toast.error("Error creating task: " + error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ postId, updatedData }, thunkAPI) => {
    try {
      const response = await axios.patch(`/api/posts/${postId}`, updatedData);
      return response.data;
    } catch (error) {
      toast.error("Post editing error: " + error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removePost = createAsyncThunk(
  "posts/removePost",
  async (postId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/posts/${postId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
