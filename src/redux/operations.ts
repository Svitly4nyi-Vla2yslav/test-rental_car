import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../service/apiService";

const getAllCars = createAsyncThunk(
    'adverts/getAllCars',
    async (rentalCars, _thunkAPI) => {
        const response = await instance.get( "/adverts");
        console.log(response.data)
        return response.data;
    }
);

export { getAllCars };
