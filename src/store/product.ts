import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../api/axios';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  images: string[];
  tags: string[];
  rating: number;
}

interface ProductsState {
  data: Product[];
  loading: boolean;
  error: string | null;
  skip: number;
  hasMore: boolean;
}

const initialState: ProductsState = {
  data: [],
  loading: true,
  error: null,
  skip: 0,
  hasMore: true,
};

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async (skip: number) => {
    const response = await getProducts(skip);
    return response.data;
  },
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        const products = action.payload.products;
        state.data = [...state.data, ...products];
        state.skip += products.length;
        if (products.length < 10) state.hasMore = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default productSlice.reducer;
