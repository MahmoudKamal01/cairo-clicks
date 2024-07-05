import { TProduct } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = TProduct[];
const actGetProductsByCatPrefix = createAsyncThunk(
  "products/actGetProductsByCatPrefix",
  async (prefix: string, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await axios.get<TResponse>(
        `http://localhost:5000/products?cat_prefix=${prefix}`
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

export default actGetProductsByCatPrefix;
