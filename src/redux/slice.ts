import { createSlice } from "@reduxjs/toolkit";
import { InitialState, RentalCars } from "./types";
import { getAllCars } from "./operations";

const initialState: InitialState = {
    rentalCars: [],
    isLoading: false,
    error: "",
    favorites: [],
};

const slice = createSlice({
    name: "catalog ",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(getAllCars.pending, state => {
            state.isLoading = true;
        })
        .addCase(getAllCars.fulfilled, (state, {payload}) => {
            state.rentalCars = payload as RentalCars[];
            state.isLoading = false;
        })
        .addCase(getAllCars.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})


export const rentalCarsReducer = slice.reducer;