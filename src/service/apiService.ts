import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://65baa122b4d53c0665535a23.mockapi.io',
});

export const getPage = async (page: any) => {
  const response = await instance.get(`/adverts/cars/?limit=12&page=${page}`);
  return response.data;
};

export {  instance };