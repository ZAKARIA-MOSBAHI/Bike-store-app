import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import CartItem from '../CartItem/CartItem';
import {styles} from './ItemsListStyle';
import {useAppStore} from '../../../../store/store';

export default function ItemsList() {
  const {cart} = useAppStore();
  useEffect(() => {
    cart.map(item => {
      console.log('name ', item.name);
      console.log('quantity ', item.quantity);
    });
  }, []);
  return (
    <ScrollView style={styles.cartItemContainer}>
      {cart.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
    </ScrollView>
  );
}
