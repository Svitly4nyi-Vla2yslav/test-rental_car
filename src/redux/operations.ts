import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../service/apiService";

const getAllCars = createAsyncThunk(
    'adverts/getAllCars',
    async (adverts , thunkAPI) => {
        try {
            const response = await instance.get('/adverts');
            return response.data;
          } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
          }
    }
);

export { getAllCars };
