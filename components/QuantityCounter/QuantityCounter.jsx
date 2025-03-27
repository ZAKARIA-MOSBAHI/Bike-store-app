import React from 'react';
import {Text, View} from 'react-native';
import Button from '../ui/Button';
import {colors} from '../../styles/colors';
import {scale, verticalScale} from 'react-native-size-matters/extend';
import {styles} from './QuantityCounterStyle';

export default function QuantityCounter({
  containerStyle,
  plusIconStyle,
  minusIconStyle,
  hide,
  productQuantityStyle,
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
    lg: 32,
    xl: 36,
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
        iconStyle={plusIconStyle}
        onPress={onPlusClick}
        containerStyle={containerStyle}
      />

      {hide === true ? null : (
        <>
          <Text style={[styles.productQuantity, productQuantityStyle]}>
            {quantity}
          </Text>
          <Button
            style={[
              styles.counterBtn,
              {height: verticalScale(sizes[size]), width: scale(sizes[size])},
            ]}
            type="minus"
            variant="dark"
            iconStyle={minusIconStyle}
            onPress={onMinusClick}
            containerStyle={containerStyle}
          />
        </>
      )}
    </View>
  );
}
