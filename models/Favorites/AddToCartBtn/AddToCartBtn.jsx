import React from 'react';
import TextBtn from '../../../components/ui/TextBtn';
import {styles} from './AddToCartBtnStyle';
import {Text} from 'react-native';

export default function AddToCartBtn({show, onPress}) {
  return (
    show && (
      <TextBtn onPress={onPress} style={styles.ctaContainer}>
        <Text style={styles.cta}>Add Selected Items To Cart</Text>
      </TextBtn>
    )
  );
}
