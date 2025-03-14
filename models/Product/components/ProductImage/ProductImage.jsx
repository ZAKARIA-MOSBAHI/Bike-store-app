import React from 'react';
import {Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters/extend';

export default function ProductImage({product}) {
  return (
    <Image
      resizeMode={'contain'}
      source={product.largeImage}
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
