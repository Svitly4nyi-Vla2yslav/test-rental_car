import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://65baa122b4d53c0665535a23.mockapi.io',
});


export {  instance };