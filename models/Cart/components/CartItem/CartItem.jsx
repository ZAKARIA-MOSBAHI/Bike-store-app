import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {typography} from '../../../../styles/typography';
import {styles} from './CartItemStyle';
import {useAppStore} from '../../../../store/store';
import QuantityCounter from '../../../../components/QuantityCounter/QuantityCounter';
import {scale} from 'react-native-size-matters/extend';
const CartItemBackground = require('../../../../assets/images/cart-item-background.png');
const cartItemImg = require('../../../../assets/images/bicycle2.png');
export default function CartItem({item}) {
  const {incrementQuantity, decrementQuantity} = useAppStore();
  const {quantity} = item;
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="contain"
          source={CartItemBackground}
          style={styles.productBgImage}>
          <Image
            source={cartItemImg}
            style={styles.productImg}
            resizeMode="contain"
          />
        </ImageBackground>
        <View style={styles.itemInfoContainer}>
          <Text style={([typography.h3], styles.productName)}>
            {item.title}
          </Text>
          <View style={styles.priceContainer}>
            <Text style={([typography.p], styles.productPrice)}>
              $ {item.price}
            </Text>

            <QuantityCounter
              containerStyle={{borderRadius: scale(8)}}
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
