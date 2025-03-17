import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {typography} from '../../../../styles/typography';
import Button from '../../../../components/ui/Button';
import {styles} from './CartItemStyle';
import {useAppStore} from '../../../../store/store';
import QuantityCounter from '../../../../components/QuantityCounter/QuantityCounter';
const CartItemBackground = require('../../../../assets/images/cart-item-background.png');

export default function CartItem({item}) {
  const {incrementQuantity, decrementQuantity} = useAppStore();
  const {img, name, price, quantity} = item;
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="contain"
          source={CartItemBackground}
          style={styles.productBgImage}>
          <Image source={img} style={styles.productImg} resizeMode="contain" />
        </ImageBackground>
        <View style={styles.itemInfoContainer}>
          <Text style={([typography.h3], styles.productName)}>{name}</Text>
          <View style={styles.priceContainer}>
            <Text style={([typography.p], styles.productPrice)}>$ {price}</Text>

            <QuantityCounter
              quantity={quantity}
              onPlusClick={() => incrementQuantity(item.id)}
              onMinusClick={() => decrementQuantity(item.id)}
            />
          </View>
        </View>
      </View>
      <View style={styles.cartDivider} />
    </>
  );
}
