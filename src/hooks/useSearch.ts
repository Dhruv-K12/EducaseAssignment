import { useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { getProductsBySearchHandler } from '../api/search';
import { Product } from '../store/product';

const useSearch = () => {
  const inputRef = useRef<TextInput | null>(null);
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [focus, setFocus] = useState(false);
  const [error, setError] = useState<null | string>('');
  const searchPressHandler = () => {
    inputRef.current?.focus();
  };
  const handleSearch = (searchVal: string) =>
    setTimeout(() => {
      getProductsBySearchHandler(searchVal, setData, setLoading, setError);
    }, 500);

  const handleFocus = () => setFocus(true);
  const handleBlur = () => setFocus(false);
  useEffect(() => {
    handleSearch('');
  }, []);
  return {
    inputRef,
    focus,
    searchPressHandler,
    handleFocus,
    handleBlur,
    searchValue,
    setSearchValue,
    data,
    handleSearch,
    loading,
    setLoading,
    error,
  };
};

export default useSearch;
