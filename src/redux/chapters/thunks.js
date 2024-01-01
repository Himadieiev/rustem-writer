import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://rustem-writer-api.onrender.com";

export const getChapters = createAsyncThunk(
  "chapters/getChapters",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/api/chapters");
      return res.data;
    } catch (error) {
      toast.error("Error while loadin chapters: " + error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getChapterById = createAsyncThunk(
  "chapters/getChapterById",
  async (chapterId, thunkAPI) => {
    try {
      const res = await axios.get(`/api/chapters/${chapterId}`);
      return res.data;
    } catch (error) {
      toast.error("Error while loadin chapter: " + error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createChapters = createAsyncThunk(
  "chapters/createChapters",
  async ({ title, text }, thunkAPI) => {
    try {
      const response = await axios.post("/api/chapters", {
        title,
        text,
      });
      return response.data;
    } catch (error) {
      toast.error("Error creating chapter: " + error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
