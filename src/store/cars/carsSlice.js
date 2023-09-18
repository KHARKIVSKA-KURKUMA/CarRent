import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from "./handleFunctions";
import { getCarsThunk } from "./carsThunk";

const carsSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCarsThunk.fulfilled, (state, { payload }) => {
        state.cars = payload;
      })
      .addMatcher(isAnyOf(), getCarsThunk.pending, handlePending)
      .addMatcher(isAnyOf(), getCarsThunk.rejected, handleRejected)
      .addMatcher(isAnyOf(), getCarsThunk.fulfilled, handleFulfilled);
  },
});

export const carsReducer = carsSlice.reducer;
