import React from 'react';
import HomeScreen from './models/Home/HomeScreen';
import ProductScreen from './models/Product/ProductScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStaticNavigation} from '@react-navigation/native';
import CartScreen from './models/Cart/CartScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CheckoutScreen from './models/Checkout/CheckoutScreen';

import RegisterScreen from './models/Register/RegisterScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Register',
  screens: {
    Register: RegisterScreen,
    Home: HomeScreen,
    Product: ProductScreen,
    Cart: CartScreen,
    Checkout: CheckoutScreen,
  },
  screenOptions: {
    headerShown: false,
  },
});
const Navigation = createStaticNavigation(RootStack);
export default function App() {
  return (
    <GestureHandlerRootView>
      <Navigation />
    </GestureHandlerRootView>
  );
}
