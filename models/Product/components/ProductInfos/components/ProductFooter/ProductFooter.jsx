import React from 'react';
import {View, Text} from 'react-native';
import TextBtn from '../../../../../../components/ui/TextBtn';
import {typography} from '../../../../../../styles/typography';
import {styles} from './ProductFooterStyle';
import {useAppStore} from '../../../../../../store/store';

export default function ProductFooter({product}) {
  const {addToCart} = useAppStore();

  const handleAddToCart = () => {
    addToCart({...product, quantity: 1});
  };

  return (
    <View style={styles.footerContainer}>
      <Text style={[typography.h1, {color: '#3D9CEA'}]}>${product.price}</Text>

      <TextBtn onPress={handleAddToCart}>
        <Text style={[typography.p, {color: 'white', textAlign: 'center'}]}>
          Add To Cart
        </Text>
      </TextBtn>
    </View>
  );
}
