import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, ImageBackground, Pressable, Text, View} from 'react-native';
import {styles} from './ProductHorizontalCardStyle';
import CloseIcon from '../../assets/icons/CloseIcon';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {colors} from '../../styles/colors';

const CartItemBackground = require('../../assets/images/cart-item-background.png');
const cardimg = require('../../assets/images/bicycle2.png');
export default function ProductHorizontalCard({
  checked,
  withCheckbox,
  onCheckboxCheck,
  item,
  withCloseBtn = false,
  onCloseBtnClick,
}) {
  const navigation = useNavigation();

  return (
    <>
      <Pressable
        style={styles.container}
        onPress={() => {
          if (!withCheckbox) {
            navigation.push('Product', {productId: item.id});
          }
        }}>
        {withCheckbox && (
          <BouncyCheckbox
            size={24}
            fillColor={colors.secondary}
            iconStyle={{borderColor: colors.secondary}}
            innerIconStyle={{borderWidth: 1}}
            onPress={onCheckboxCheck}
            isChecked={checked}
            disableBuiltInState
          />
        )}
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
          <Text style={styles.productName} numberOfLines={1}>
            {item.title}
          </Text>
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
