import React from 'react';
import {View} from 'react-native';
import Header from '../../components/Header/Header';
import {useNavigation} from '@react-navigation/native';

import CouponInput from './components/CouponInput/CouponInput';
import {styles} from './CartScreenStyle';
import ItemsList from './components/ItemsList/ItemsList';
export default function CartScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        text={'My Shopping Cart'}
        iconRight={false}
        btnType={'back'}
        onBtnPress={() => navigation.goBack()}
        textStyle={{marginInline: 'auto'}}
      />
      <ItemsList />
      <View style={styles.footerContainer}>
        <CouponInput />
      </View>
    </View>
  );
}
