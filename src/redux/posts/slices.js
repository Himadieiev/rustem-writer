import { createSlice } from "@reduxjs/toolkit";
import { createPost, removePost, editPost, getPosts } from "./thunks";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  return {
    ...state,
    isLoading: true,
  };
};

const handleRejected = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.payload,
  };
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, handlePending)
      .addCase(getPosts.rejected, handleRejected)
      .addCase(getPosts.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          items: action.payload,
        };
      })
      .addCase(createPost.pending, handlePending)
      .addCase(createPost.rejected, handleRejected)
      .addCase(createPost.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          items: state.items
            ? [...state.items, action.payload]
            : [action.payload],
        };
      })
      .addCase(editPost.pending, handlePending)
      .addCase(editPost.rejected, handleRejected)
      .addCase(editPost.fulfilled, (state, action) => {
        const updatedPost = action.payload;
        const taskIdToUpdate = updatedPost._id;
        const updatedItems = state.items.map((post) =>
          post._id === taskIdToUpdate ? updatedPost : post
        );
        state.items = updatedItems;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(removePost.pending, handlePending)
      .addCase(removePost.rejected, handleRejected)
      .addCase(removePost.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (post) => post._id === action.payload._id
        );
        state.items.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const postsReducer = postSlice.reducer;
