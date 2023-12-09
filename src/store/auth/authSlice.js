import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrentUser, logIn, logOut, register } from "./authThunks";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export const handleRejected = (state, { payload }) => {
  state.error = payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    token: null,
    isLoading: false,
    isLoggedIn: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        console.log("payload :>> ", payload);
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = {};
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(fetchCurrentUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      );
  },
});

const authReducer = authSlice.reducer;

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "isLoggedIn"],
};

export const persistedAuthReducer = persistReducer(persistConfig, authReducer);
