import React from 'react';
import {Text, View} from 'react-native';
import Button from '../ui/Button';
import {colors} from '../../styles/colors';
import {scale, verticalScale} from 'react-native-size-matters/extend';
import {styles} from './QuantityCounterStyle';

export default function QuantityCounter({
  quantity,
  onPlusClick,
  onMinusClick,
  size = 'default',
  style,
  dark = true,
}) {
  const sizes = {
    xs: 20,
    sm: 24,
    default: 28,
  };
  return (
    <View
      style={[
        styles.quantityCounter,
        {backgroundColor: dark ? colors.dark : null},
        style,
      ]}>
      <Button
        style={[
          styles.counterBtn,
          {width: scale(sizes[size]), height: verticalScale(sizes[size])},
        ]}
        type="plus"
        onPress={onPlusClick}
      />
      <Text style={[styles.productQuantity]}>{quantity}</Text>
      <Button
        style={[
          styles.counterBtn,
          {height: verticalScale(sizes[size]), width: scale(sizes[size])},
        ]}
        type="minus"
        variant="dark"
        onPress={onMinusClick}
      />
    </View>
  );
}
