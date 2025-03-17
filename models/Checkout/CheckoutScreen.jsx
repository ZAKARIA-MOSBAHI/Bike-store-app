import React from 'react';
import {View} from 'react-native';
import {colors} from '../../styles/colors';
import Header from '../../components/Header/Header';
import {useNavigation} from '@react-navigation/native';

export default function CheckoutScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Header
        text={'Checkout'}
        iconRight={false}
        btnType={'close'}
        onBtnPress={() => navigation.goBack()}
      />
    </View>
  );
}
