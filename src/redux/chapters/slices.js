import { createSlice } from "@reduxjs/toolkit";
import { createChapter, getChapters, getChapterById } from "./thunks";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  currentChapter: null,
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

export const chapterSlice = createSlice({
  name: "chapters",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getChapters.pending, handlePending)
      .addCase(getChapters.rejected, handleRejected)
      .addCase(getChapters.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          items: action.payload,
        };
      })
      .addCase(createChapter.pending, handlePending)
      .addCase(createChapter.rejected, handleRejected)
      .addCase(createChapter.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          items: state.items
            ? [...state.items, action.payload]
            : [action.payload],
        };
      })
      .addCase(getChapterById.pending, handlePending)
      .addCase(getChapterById.rejected, handleRejected)
      .addCase(getChapterById.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          items: action.payload ? state.items : state.items,
        };
      })
      .addCase(getChapterById.pending, handlePending)
      .addCase(getChapterById.rejected, handleRejected)
      .addCase(getChapterById.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          currentChapter: action.payload,
        };
      });
  },
});

export const chaptersReducer = chapterSlice.reducer;
