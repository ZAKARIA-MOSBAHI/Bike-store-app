import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, ImageBackground, Pressable, Text, View} from 'react-native';
import {styles} from './ProductHorizontalCardStyle';
import {typography} from '../../styles/typography';

const CartItemBackground = require('../../assets/images/cart-item-background.png');

export default function ProductHorizontalCard({item}) {
  const navigation = useNavigation();
  const {img, name, price} = item;
  return (
    <>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate('Product', {productId: item.id})}>
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
          </View>
        </View>
      </Pressable>
      <View style={styles.cartDivider} />
    </>
  );
}
