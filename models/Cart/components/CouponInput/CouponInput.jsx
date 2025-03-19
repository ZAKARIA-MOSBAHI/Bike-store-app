import React from 'react';
import {ImageBackground, Pressable, Text, TextInput, View} from 'react-native';
import TextBtn from '../../../../components/ui/TextBtn';
import {typography} from '../../../../styles/typography';
import {styles} from './CouponInputStyle';
import {colors} from '../../../../styles/colors';
import LinearGradient from 'react-native-linear-gradient';

const inputBackground = require('../../../../assets/images/coupon-input-background.png');
export default function CouponInput() {
  const handleChange = input => {
    console.log(input);
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
        <Pressable>
          <LinearGradient
            style={styles.applyBtn}
            colors={colors.gradientPrimary}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}>
            <Text style={[[typography.h3], styles.textBtn]}>Apply</Text>
          </LinearGradient>
        </Pressable>
      </View>
    </ImageBackground>
  );
}
