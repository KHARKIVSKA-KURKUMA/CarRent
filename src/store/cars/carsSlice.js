import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from "./handleFunctions";
import {
  deleteAdvertsThunk,
  getCarsThunk,
  getUserAdvertsThunk,
  postAdvertsThunk,
  putAdvertsThunk,
} from "./carsThunk";

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favoriteCars = [payload, ...state.favoriteCars];
    },
    removeFavorite: (state, { payload }) => {
      const index = state.favoriteCars.findIndex((car) => car._id === payload);
      state.favoriteCars.splice(index, 1);
    },
    changeFilteredCars: (state, { payload }) => {
      const filteredCars = state.cars.filter((car) => {
        const match = car.rentalPrice.match(/\$(\d+)/);
        const price = parseInt(match[1], 10);
        if (payload.brand && car.make !== payload.brand) {
          return false;
        }
        if (payload.price && price > payload.price) {
          return false;
        }
        if (
          payload.mileage &&
          (car.mileage < payload.mileage.from ||
            car.mileage > payload.mileage.to)
        ) {
          return false;
        }
        return true;
      });
      state.filteredCars = filteredCars;
      state.isFiltered = true;
    },
    resetArr: (state) => {
      state.isFiltered = false;
      state.filteredCars = [];
    },
    changePage: (state) => {
      state.currentItems += 8;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarsThunk.fulfilled, (state, { payload }) => {
        // sort by price
        // const sortedCars = [...payload].sort((a, b) => {
        //   const priceA = parseFloat(a.rentalPrice.replace("$", ""));
        //   const priceB = parseFloat(b.rentalPrice.replace("$", ""));
        //   return priceA - priceB;
        // });
        // state.cars = sortedCars;
        state.cars = [...payload];
        state.isLoading = false;
        state.error = "";
      })
      .addCase(getUserAdvertsThunk.fulfilled, (state, { payload }) => {
        state.userAdverts = [...payload];
      })
      .addCase(deleteAdvertsThunk.fulfilled, (state, { meta }) => {
        const index = state.userAdverts.findIndex(
          (advert) => advert._id === meta.arg
        );
        state.userAdverts.splice(index, 1);
      })
      .addCase(putAdvertsThunk.fulfilled, (state, { payload }) => {
        const index = state.userAdverts.findIndex(
          (advert) => advert._id === payload._id
        );
        state.userAdverts.splice(index, 1, payload);
      })
      .addCase(postAdvertsThunk.fulfilled, (state, { payload }) => {
        state.userAdverts.push(payload);
      })
      .addCase(getCarsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getCarsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(
        isAnyOf(
          getUserAdvertsThunk.fulfilled,
          postAdvertsThunk.fulfilled,
          deleteAdvertsThunk.fulfilled,
          putAdvertsThunk.fulfilled
        ),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(
          getUserAdvertsThunk.pending,
          postAdvertsThunk.pending,
          deleteAdvertsThunk.pending,
          putAdvertsThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getUserAdvertsThunk.rejected,
          postAdvertsThunk.rejected,
          deleteAdvertsThunk.rejected,
          putAdvertsThunk.rejected
        ),
        handleRejected
      );
  },
});

const carsReducer = carsSlice.reducer;
const persistConfig = {
  key: "favorite",
  storage,
  whitelist: ["favoriteCars"],
};

export const {
  addFavorite,
  removeFavorite,
  changeFilteredCars,
  resetArr,
  changePage,
} = carsSlice.actions;

export const persistedCarReducer = persistReducer(persistConfig, carsReducer);
