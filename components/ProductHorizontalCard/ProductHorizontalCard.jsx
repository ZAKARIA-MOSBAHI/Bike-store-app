import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, ImageBackground, Pressable, Text, View} from 'react-native';
import {styles} from './ProductHorizontalCardStyle';
import CloseIcon from '../../assets/icons/CloseIcon';

const CartItemBackground = require('../../assets/images/cart-item-background.png');

export default function ProductHorizontalCard({
  item,
  withCloseBtn = false,
  onCloseBtnClick,
}) {
  const navigation = useNavigation();
  const {img, name, price, description} = item;
  return (
    <>
      <Pressable
        style={styles.container}
        onPress={() => navigation.push('Product', {productId: item.id})}>
        <ImageBackground
          resizeMode="contain"
          source={CartItemBackground}
          style={styles.productBgImage}>
          <Image source={img} style={styles.productImg} resizeMode="contain" />
        </ImageBackground>
        <View style={styles.itemInfoContainer}>
          <Text style={styles.productName}>{name}</Text>
          <Text style={styles.productDescription} numberOfLines={2}>
            {description}
          </Text>

          <View style={styles.priceContainer}>
            <Text style={styles.productPrice}>$ {price}</Text>
          </View>
        </View>
        {withCloseBtn && (
          <Pressable onPress={onCloseBtnClick} style={styles.closeBtn}>
            <CloseIcon />
          </Pressable>
        )}
      </Pressable>
      <View style={styles.cartDivider} />
    </>
  );
}
