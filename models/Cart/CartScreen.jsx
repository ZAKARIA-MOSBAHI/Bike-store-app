import React, {useEffect, useState} from 'react';
import {Keyboard, View} from 'react-native';
import Header from '../../components/Header/Header';
import {useNavigation} from '@react-navigation/native';

import CouponInput from './components/CouponInput/CouponInput';
import {styles} from './CartScreenStyle';
import ItemsList from './components/ItemsList/ItemsList';
import OrderInfos from './components/OrderInfos/OrderInfos';
import CheckoutBtn from './components/CheckoutBtn/CheckoutBtn';
export default function CartScreen() {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        text={'My Shopping Cart'}
        iconRight={false}
        btnType={'back'}
        onBtnPress={() => navigation.goBack()}
      />
      <ItemsList />
      <View style={styles.footerContainer}>
        <CouponInput />
        {!keyboardVisible && <OrderInfos />}
        {!keyboardVisible && <CheckoutBtn />}
      </View>
    </View>
  );
}
