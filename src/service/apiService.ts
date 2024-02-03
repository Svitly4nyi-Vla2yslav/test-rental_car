import axios from 'axios'
// import { ApiServiceOptions } from './types';

const instance = axios.create({
  baseURL: 'https://65baa122b4d53c0665535a23.mockapi.io',
});

// const apiService = async (
//   { method, url, data, config }: ApiServiceOptions,
//   errorHandler = (error: any) => {
//     return `An error occurred: ${error}`;
//   }
// ) => {
//   try {
//     const response = await instance.request({
//       method,
//       url,
//       data,
//       ...config,
//     });

//     return response.data;
//   } catch (error) {
//     return errorHandler(error);
//   }
// };

export {  instance };