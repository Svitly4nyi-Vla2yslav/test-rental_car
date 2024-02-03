import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../service/apiService";

const getAllCars = createAsyncThunk(
    'adverts/getAllCars',
    async () => {
        const response = await instance.get( "/adverts");
        console.log(response, "response")
        return response.data;
    }
);

export { getAllCars };
