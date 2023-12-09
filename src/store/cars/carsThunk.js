import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://rent-car-r832.onrender.com";

export const getCarsThunk = createAsyncThunk(
  "cars/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/adverts/catalog`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
