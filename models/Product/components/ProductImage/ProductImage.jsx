import React from 'react';
import {Image} from 'react-native';
import {styles} from './ProductImageStyle';
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
