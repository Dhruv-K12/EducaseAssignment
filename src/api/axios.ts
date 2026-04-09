import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = (skip: number) =>
  api.get(`/products?skip=${skip}&limit=10`);

export const getProductsBySearch = (searchVal: string) =>
  api.get(`/products/search?q=${searchVal}`);
