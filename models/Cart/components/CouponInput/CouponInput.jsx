import React from 'react';
import {ImageBackground, Text, TextInput, View} from 'react-native';
import TextBtn from '../../../../components/ui/TextBtn';
import {typography} from '../../../../styles/typography';
import {styles} from './CouponInputStyle';
import {colors} from '../../../../styles/colors';

const inputBackground = require('../../../../assets/images/coupon-input-background.png');
const coupons = ['bike'];
export default function CouponInput() {
  const handleChange = input => {
    if (coupons.includes(input)) {
      console.log(true);
      // adding the discount
    }
  };
  return (
    <ImageBackground source={inputBackground} style={styles.container}>
      <View style={styles.couponInputContainer}>
        <TextInput
          onChangeText={handleChange}
          placeholderTextColor={colors.gray}
          placeholder="add your coupon code"
          style={[typography.p, styles.input]}
        />
        <TextBtn style={styles.applyBtn}>
          <Text style={[[typography.h3], styles.textBtn]}>Apply</Text>
        </TextBtn>
      </View>
    </ImageBackground>
  );
}
