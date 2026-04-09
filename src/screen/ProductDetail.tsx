import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { productDetailProp } from '../types/screen.type';
import { COLORS, SPACING, TEXT } from '../const/theme';

export const ProductDetail = ({ route }: productDetailProp) => {
  const product = route.params.product;
  const handleAddToCart = () => {
    console.log('Added to cart:', product.title);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />

      <View style={styles.container}>
        <Text style={styles.title}>{product.title}</Text>

        <Text style={styles.price}>₹ {product.price}</Text>

        <Text style={styles.description}>{product.description}</Text>

        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    gap: 16,
    padding: SPACING.lg,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  content: {
    gap: 8,
  },
  title: {
    ...TEXT.title,
  },
  price: {
    ...TEXT.h2,
  },
  description: {
    ...TEXT.body,
    letterSpacing: 1,
  },
  button: {
    backgroundColor: COLORS.textPrimary,
    padding: SPACING.lg,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  buttonText: {
    ...TEXT.button,
    color: COLORS.background,
  },
});
