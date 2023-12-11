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

export const getUserAdvertsThunk = createAsyncThunk(
  "cars/getUsersAdverts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/adverts`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postAdvertsThunk = createAsyncThunk(
  "cars/postAdvert",
  async (newAdvert, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/adverts", newAdvert);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteAdvertsThunk = createAsyncThunk(
  "cars/deleteAdvert",
  async (advertId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/adverts/${advertId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const putAdvertsThunk = createAsyncThunk(
  "cars/editAdvert",
  async ({ id, newAdvert }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/adverts/${id}`, newAdvert);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
