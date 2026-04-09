import React from 'react';
import { Product } from '../store/product';
import { getProductsBySearch } from './axios';

export const getProductsBySearchHandler = async (
  searchVal: string,
  setData: React.Dispatch<React.SetStateAction<Product[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>,
) => {
  try {
    setLoading(true);
    const response = await getProductsBySearch(searchVal);
    console.log(response);
    setData(response.data.products);
  } catch (e: any) {
    setError(e.message || 'something went wrong please try again later');
  } finally {
    setLoading(false);
  }
};
