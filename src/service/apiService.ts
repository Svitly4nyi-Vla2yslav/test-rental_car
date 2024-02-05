import axios from 'axios';
// import { Dispatch } from 'redux';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RentalCars } from '../redux/types';

const instance = axios.create({
  baseURL: 'https://65baa122b4d53c0665535a23.mockapi.io',
});

// const getCars = createAsyncThunk<RentalCars[], number>(
//   'cars/getAllCars',
//   async (page: number) => {
//     const response = await instance.get(`/adverts/?limit=12&page=${page}`);
//     return response.data;
//   }
// );, getCars 

export { instance};