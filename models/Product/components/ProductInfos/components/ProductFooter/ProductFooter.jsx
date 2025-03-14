import React from 'react';
import {View, Text} from 'react-native';
import TextBtn from '../../../../../../components/ui/TextBtn';
import {typography} from '../../../../../../styles/typography';
import {styles} from './ProductFooterStyle';
import {useAppStore} from '../../../../../../store/store';

export default function ProductFooter({product}) {
  const {cart, addToCart} = useAppStore();

  const h = () => {
    addToCart({...product, quantity: 1});
    console.log(cart);
  };
  return (
    <View style={styles.footerContainer}>
      <Text style={[typography.h1, {color: '#3D9CEA'}]}>${product.price}</Text>
      <TextBtn onPress={() => h()}>
        <Text style={[typography.p, {color: 'white'}]}>Add To Cart</Text>
      </TextBtn>
    </View>
  );
}
