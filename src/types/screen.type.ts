import { RouteProp } from '@react-navigation/native';
import { routeStackParamList } from './navigation.type';

export type productDetailRouteProp = RouteProp<
  routeStackParamList,
  'ProductDetail'
>;

export interface productDetailProp {
  route: productDetailRouteProp;
}
