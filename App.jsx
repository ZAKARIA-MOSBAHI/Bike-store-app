import React from 'react';
import HomeScreen from './models/Home/HomeScreen';
import ProductScreen from './models/Product/ProductScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStaticNavigation} from '@react-navigation/native';
import CartScreen from './models/Cart/CartScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CheckoutScreen from './models/Checkout/CheckoutScreen';

import LoginScreen from './models/Login/LoginScreen';
import SignupScreen from './models/Signup/SignupScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Login',
  screens: {
    Login: LoginScreen,
    Signup: SignupScreen,
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
