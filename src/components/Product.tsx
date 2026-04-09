import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { COLORS, DIMENSIONS, SPACING, TEXT } from '../const/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { productProps } from '../types/component.type';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { navigationType } from '../types/navigation.type';
const Product = ({ data }: productProps) => {
  const navigation = useNavigation<navigationType>();
  const navigateToProductDetail = () =>
    navigation.navigate('ProductDetail', { product: data });
  return (
    <TouchableOpacity
      onPress={navigateToProductDetail}
      activeOpacity={0.9}
      style={styles.container}
    >
      <TouchableOpacity activeOpacity={0.2} style={styles.cartBtn}>
        <AntDesign name="plus" color={COLORS.background} size={16} />
      </TouchableOpacity>
      <Image
        source={{ uri: data.thumbnail }}
        style={styles.thumbnail}
        resizeMode="contain"
      />
      <View style={styles.section}>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color={COLORS.primary} />
          <Text style={styles.rating}>4. 8</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    padding: SPACING.sm,
    backgroundColor: COLORS.card,
    elevation: 2,
    borderRadius: 12,
    margin: 4,
    marginVertical: 12,
    width: '47%',
  },
  thumbnail: {
    width: '100%',
    height: 200,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    flex: 1,
    ...TEXT.title,
  },
  cartBtn: {
    width: 35,
    height: 35,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'black',
    elevation: 3,
    right: SPACING.sm,
    top: SPACING.sm,
    zIndex: 9999,
  },
  rating: {
    ...TEXT.title,
  },
});
