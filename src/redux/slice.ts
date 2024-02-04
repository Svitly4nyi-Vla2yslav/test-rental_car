import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialState, RentalCars } from "./types";
import { getAllCars } from "./operations";


const favoritesFromLocalStorage: RentalCars[] =
  JSON.parse(localStorage.getItem('favorites') || "[]");

const initialState: InitialState = {
  rentalCars: [],
  isLoading: false,
  error: "",
  favorites: favoritesFromLocalStorage,
};

const slice = createSlice({
  name: "adverts",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<RentalCars>) => {
      const isFavorite = state.favorites.find(
        (favorite) => favorite.id === action.payload.id
      );

      if (!isFavorite) {
        state.favorites.push(action.payload);
      } else {
        state.favorites = state.favorites.filter(
          (favorite) => favorite.id !== action.payload.id
        );
      }

      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rentalCars = action.payload as RentalCars[];
        
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { toggleFavorite } = slice.actions;
export const rentalCarsReducer = slice.reducer;