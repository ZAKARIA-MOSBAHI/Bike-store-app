import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './OrderInfosStyle';
import {typography} from '../../../../styles/typography';
import {colors} from '../../../../styles/colors';
import {useAppStore} from '../../../../store/store';

export default function OrderInfos({keyboardVisible}) {
  const {bag} = useAppStore();
  return (
    !keyboardVisible && (
      <View style={styles.container}>
        <Text style={[styles.title, typography.h3]}>
          Your bag qualifies for free shipping
        </Text>
        <View style={styles.infoContainer}>
          <View style={styles.row}>
            <Text
              style={[
                {
                  color: '#fff',
                },
                typography.h3,
              ]}>
              Subtotal :
            </Text>
            <Text style={[{color: colors.gray}, typography.h3]}>
              $ {bag.subtotal}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={[
                {
                  color: '#fff',
                },
                typography.h3,
              ]}>
              Delivery Fee :
            </Text>
            <Text style={[{color: colors.gray}, typography.h3]}>
              $ {bag.deliveryFee}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={[
                {
                  color: '#fff',
                },
                typography.h3,
              ]}>
              Discount :
            </Text>
            <Text style={[{color: colors.gray}, typography.h3]}>
              $ {bag.discount}
            </Text>
          </View>
          <View style={[styles.totalContainer, styles.row]}>
            <Text
              style={[
                {
                  color: '#fff',
                },
                typography.h2,
              ]}>
              Total :
            </Text>
            <Text
              style={[
                {color: colors.secondary, fontWeight: 'bold'},
                typography.h2,
              ]}>
              $ {bag.total}
            </Text>
          </View>
        </View>
      </View>
    )
  );
}
