import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Product } from '../store/product';

export type routeStackParamList = {
  Home: undefined;
  Search: undefined;
  ProductDetail: { product: Product };
};

export type navigationType = NativeStackNavigationProp<routeStackParamList>;
