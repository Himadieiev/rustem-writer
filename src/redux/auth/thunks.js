import axios from "axios";
import { toast } from "react-toastify";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://rustem-writer-api.onrender.com";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "/api/auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/api/auth/register", credentials);

      setAuthHeader(res.data.token);

      toast.success("Реєстрація пройшла успішно");

      return res.data;
    } catch (error) {
      toast.error(`${credentials.email} вже використовується`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "/api/auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/api/auth/login", credentials);

      setAuthHeader(res.data.token);

      toast.success("Ви успішно авторизовані");

      return res.data;
    } catch (error) {
      toast.error("Електронна адреса або пароль вказані невірно");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "/api/auth/logout",
  async (_, thunkAPI) => {
    try {
      await axios.post("/api/auth/logout");

      clearAuthHeader();
      // toast.success("You have been logged out successfully!");
    } catch (error) {
      toast.error("Logout failed. Please try again.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "/api/auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("/api/users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editData = createAsyncThunk(
  "/api/users/edit",
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      setAuthHeader(persistedToken);
      const res = await axios.patch("/api/users/edit", credentials);
      // toast.success("User data updated successfully!");
      return res.data;
    } catch (error) {
      toast.error(`Something went wrong: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
