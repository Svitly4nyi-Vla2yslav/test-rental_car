import { RootState } from "./rootReducer/rootReducer";

export const selectRentalCars = (state: RootState) => state.rentalCars.rentalCars;

export const selectIsLoading = (state: RootState) => state.rentalCars.isLoading;

export const selectFavorites = (state: RootState) => state.rentalCars.favorites;