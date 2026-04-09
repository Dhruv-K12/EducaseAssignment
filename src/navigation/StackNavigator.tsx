import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import { routeStackParamList } from '../types/navigation.type';
import Search from '../screen/Search';
import { ProductDetail } from '../screen/ProductDetail';

const Stack = createNativeStackNavigator<routeStackParamList>();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
