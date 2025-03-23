import React, {useEffect} from 'react';
import HomeScreen from './models/Home/HomeScreen';
import ProductScreen from './models/Product/ProductScreen';
import CartScreen from './models/Cart/CartScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CheckoutScreen from './models/Checkout/CheckoutScreen';
import LoginScreen from './models/Login/LoginScreen';
import SignupScreen from './models/Signup/SignupScreen';
import SplashScreen from 'react-native-splash-screen';
import ProfileScreen from './models/Profile/ProfileScreen';
import FavoritesScreen from './models/Favorites/FavoritesScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Product" component={ProductScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
