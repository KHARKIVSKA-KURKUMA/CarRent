import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { persistedCarReducer } from "./cars/carsSlice";
import { filterReducer } from "./filter/filterSlice";
import { persistedAuthReducer } from "./auth/authSlice";

const reducer = {
  auth: persistedAuthReducer,
  cars: persistedCarReducer,
  filter: filterReducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
