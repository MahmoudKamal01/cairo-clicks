import { TCategory } from "@customTypes/category";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = TCategory[];
const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await axios.get<TResponse>(
        "http://localhost:5000/categories"
      );
      const data = response.data;
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);

export default actGetCategories;
