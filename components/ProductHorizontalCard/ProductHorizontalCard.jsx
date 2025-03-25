import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, ImageBackground, Pressable, Text, View} from 'react-native';
import {styles} from './ProductHorizontalCardStyle';
import CloseIcon from '../../assets/icons/CloseIcon';

const CartItemBackground = require('../../assets/images/cart-item-background.png');
const cardimg = require('../../assets/images/bicycle2.png');
export default function ProductHorizontalCard({
  item,
  withCloseBtn = false,
  onCloseBtnClick,
}) {
  const navigation = useNavigation();
  return (
    <>
      <Pressable
        style={styles.container}
        onPress={() => navigation.push('Product', {productId: item.id})}>
        <ImageBackground
          resizeMode="contain"
          source={CartItemBackground}
          style={styles.productBgImage}>
          <Image
            source={cardimg}
            style={styles.productImg}
            resizeMode="contain"
          />
        </ImageBackground>
        <View style={styles.itemInfoContainer}>
          <Text style={styles.productName}>{item.title}</Text>
          <Text style={styles.productDescription} numberOfLines={2}>
            {item.description}
          </Text>

          <View style={styles.priceContainer}>
            <Text style={styles.productPrice}>$ {item.price}</Text>
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
