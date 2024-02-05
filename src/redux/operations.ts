import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../service/apiService";
import { RentalCars } from "./types";

// const getAllCars = createAsyncThunk(
//     'adverts/getAllCars',
//     async (adverts , thunkAPI) => {
//         try {
//             const response = await instance.get('/adverts');
//             return response.data;
//           } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//           }
//     }
// );

const getAllCars = createAsyncThunk<RentalCars[], number>(
  'cars/getAllCars',
  async (page: number) => {
    const response = await instance.get(`/adverts/?limit=12&page=${page}`);
    return response.data;
  }
);

export { getAllCars };
