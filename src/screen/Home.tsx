import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, DIMENSIONS, SPACING, TEXT } from '../const/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useHome } from '../hooks/useHome';
import Product from '../components/Product';
import Loading from '../components/Loading';
import Error from '../components/Error';
const Home = () => {
  const {
    data,
    error,
    loading,
    fetchProductsHandler,
    navigateToSearch,
    loadMore,
  } = useHome();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <View>
          <Text style={TEXT.caption}>Delivered To,</Text>
          <Text style={TEXT.body}>Malviya Nagar, New Delhi</Text>
        </View>
        <View style={styles.section}>
          <TouchableOpacity onPress={navigateToSearch} style={styles.navbarBtn}>
            <Ionicons name="search" size={18} color={COLORS.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navbarBtn}>
            <Ionicons name="cart" size={18} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        ListEmptyComponent={
          loading ? (
            <Loading />
          ) : (
            <Error message={error} onRetry={fetchProductsHandler} />
          )
        }
        data={data}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => <Product data={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.lg,
    backgroundColor: COLORS.background,
    gap: 18,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 40,
    height: 40,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  navbarBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: COLORS.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  slidingImage: {
    width: DIMENSIONS.width - SPACING.lg * 2,
    height: DIMENSIONS.height * 0.22,
    borderRadius: DIMENSIONS.width * 0.05,
    marginRight: 8,
  },
});
