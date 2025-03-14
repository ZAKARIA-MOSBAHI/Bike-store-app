import React from 'react';
import {ImageBackground, Text, TextInput, View} from 'react-native';
import TextBtn from '../../../../components/ui/TextBtn';
import {typography} from '../../../../styles/typography';
import {styles} from './CouponInputStyle';
import {colors} from '../../../../styles/colors';

const inputBackground = require('../../../../assets/images/coupon-input-background.png');

export default function CouponInput() {
  return (
    <ImageBackground source={inputBackground} style={styles.container}>
      <View style={styles.couponInputContainer}>
        <TextInput
          placeholderTextColor={colors.gray}
          placeholder="add your coupon code"
          style={styles.input}
        />
        <TextBtn style={styles.applyBtn}>
          <Text style={[[typography.h3], styles.textBtn]}>Apply</Text>
        </TextBtn>
      </View>
    </ImageBackground>
  );
}
