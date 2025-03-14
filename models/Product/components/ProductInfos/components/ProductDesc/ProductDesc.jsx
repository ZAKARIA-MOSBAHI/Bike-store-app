import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native';
import {styles} from './ProductDescStyle';
import {typography} from '../../../../../../styles/typography';

export default function ProductDesc({product}) {
  return (
    <View style={styles.description}>
      <Text style={[typography.h2, styles.productTitle]}>{product.name}</Text>
      <Text style={[typography.p, styles.productDescription]}>
        {product.description}
      </Text>
    </View>
  );
}
