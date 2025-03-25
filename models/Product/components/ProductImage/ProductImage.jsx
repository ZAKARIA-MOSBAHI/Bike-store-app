import React from 'react';
import {Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters/extend';
const productImg = require('../../../../assets/images/bicycle2-lg.png');

export default function ProductImage({product}) {
  return (
    <Image
      resizeMode={'contain'}
      source={productImg}
      style={styles.productImage}
    />
  );
}

export const styles = ScaledSheet.create({
  productImage: {
    width: '90%',
    marginInline: 'auto',
  },
});
