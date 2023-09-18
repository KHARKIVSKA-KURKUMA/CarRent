import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./cars/carsSlice";

const reducer = {
  cars: carsReducer,
};

export const store = configureStore({
  reducer,
});
