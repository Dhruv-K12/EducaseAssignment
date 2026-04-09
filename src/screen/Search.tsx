import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SPACING } from '../const/theme';
import Feather from 'react-native-vector-icons/Feather';
import useSearch from '../hooks/useSearch';
import Product from '../components/Product';
import Loading from '../components/Loading';
import Error from '../components/Error';
const Search = () => {
  const {
    searchPressHandler,
    focus,
    inputRef,
    handleFocus,
    handleBlur,
    searchValue,
    setSearchValue,
    handleSearch,
    data,
    loading,
    error,
  } = useSearch();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={searchPressHandler}
        activeOpacity={0.8}
        style={[styles.searchContainer, focus && styles.searchFocusedContainer]}
      >
        <Feather name="search" size={24} color={COLORS.primary} />
        <TextInput
          style={{ flex: 1 }}
          ref={inputRef}
          value={searchValue}
          onChangeText={val => {
            setSearchValue(val);
            handleSearch(val);
          }}
          placeholder="Search"
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholderTextColor={COLORS.primary}
        />
      </TouchableOpacity>
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        ListEmptyComponent={
          loading ? (
            <Loading />
          ) : (
            <Error
              message={error ? error : `No products found for ${searchValue}`}
            />
          )
        }
        data={data}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Product data={item} />}
      />
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.lg,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 0.4,
    paddingHorizontal: 8,
    gap: 8,
  },
  searchFocusedContainer: {
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
});
