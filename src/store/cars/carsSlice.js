import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from "./handleFunctions";
import { getCarsThunk } from "./carsThunk";

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favoriteCars = [payload, ...state.favoriteCars];
    },
    removeFavorite: (state, { payload }) => {
      const index = state.favoriteCars.findIndex((car) => car.id === payload);
      state.favoriteCars.splice(index, 1);
    },
  },
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

const carsReducer = carsSlice.reducer;
const persistConfig = {
  key: "favorite",
  storage,
  whitelist: ["favoriteCars"],
};

export const { addFavorite, removeFavorite } = carsSlice.actions;
export const persistedCarReducer = persistReducer(persistConfig, carsReducer);
