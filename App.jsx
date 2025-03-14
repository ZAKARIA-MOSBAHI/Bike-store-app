import React from 'react';
import HomeScreen from './models/Home/HomeScreen';
import ProductScreen from './models/Product/ProductScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStaticNavigation} from '@react-navigation/native';
import CartScreen from './models/Cart/CartScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: HomeScreen,
    Product: ProductScreen,
    Cart: CartScreen,
  },
  screenOptions: {
    headerShown: false,
  },
});
const Navigation = createStaticNavigation(RootStack);
export default function App() {
  return <Navigation />;
}
