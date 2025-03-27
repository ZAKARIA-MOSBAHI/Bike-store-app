import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './CartBadgeStyle';
import {useAppStore} from '../../store/store';

export default function CartBadge() {
  const {cart} = useAppStore();
  return (
    cart.length > 0 && (
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{cart.length}</Text>
      </View>
    )
  );
}
