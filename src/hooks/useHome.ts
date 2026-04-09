import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchProducts } from '../store/product';
import { useNavigation } from '@react-navigation/native';
import { navigationType } from '../types/navigation.type';

export const useHome = () => {
  const dispatch = useAppDispatch();
  const { loading, error, data, skip, hasMore } = useAppSelector(
    state => state.product,
  );
  const fetchProductsHandler = () => dispatch(fetchProducts(skip));
  const navigation = useNavigation<navigationType>();
  const navigateToSearch = () => navigation.navigate('Search');
  const loadMore = () => {
    if (hasMore && !loading) {
      dispatch(fetchProducts(skip));
    }
  };
  useEffect(() => {
    fetchProductsHandler();
  }, []);

  return {
    loading,
    error,
    data,
    fetchProductsHandler,
    navigateToSearch,
    loadMore,
  };
};
