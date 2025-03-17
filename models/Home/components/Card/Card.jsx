import React, {useEffect, useState} from 'react';
import {ImageBackground, View, Text, Image, Pressable} from 'react-native';
import {styles} from './CardStyle';
import HeartIcon from '../../../../assets/icons/HeartIcon';
import {typography} from '../../../../styles/typography';
import {useNavigation} from '@react-navigation/native';
import QuantityCounter from '../../../../components/QuantityCounter/QuantityCounter';
import {useAppStore} from '../../../../store/store';
import {scale, verticalScale} from 'react-native-size-matters/extend';

const bg = require('../../../../assets/images/card.png');
export default function Card({styling, product}) {
  const {cart, incrementQuantity, decrementQuantity} = useAppStore();
  const [isFavorite, setIsFavorite] = useState(false);
  const [productQuantity, setProductQuantity] = useState(0);

  const navigation = useNavigation();
  useEffect(() => {
    const productInCart = cart.find(item => {
      if (item.id === product.id) return item;
    });
    if (productInCart) {
      setProductQuantity(productInCart.quantity);
    } else {
      setProductQuantity(0);
    }
  }, [cart, product]);
  return (
    <Pressable
      style={styles.card}
      onPress={() => {
        navigation.navigate('Product', {productId: product.id});
      }}>
      <ImageBackground
        source={bg}
        resizeMode="stretch"
        style={[styles.background, styling]}>
        <View style={styles.productImageContainer}>
          <Image source={product.img} style={styles.productImage} />
          <Pressable
            onPress={() => setIsFavorite(!isFavorite)}
            style={styles.heartBtn}>
            <HeartIcon isFavorite={isFavorite} />
          </Pressable>
        </View>
        <View style={[styles.cardinfo]}>
          <Text style={[styles.category, typography.h4]}>
            {product.category}
          </Text>
          <Text style={[styles.name, typography.p]}>{product.name}</Text>
          <Text style={[styles.price, typography.h4]}>$ {product.price}</Text>
        </View>
        {productQuantity !== 0 && (
          <QuantityCounter
            style={{
              position: 'absolute',
              right: scale(8),
              bottom: verticalScale(36),
            }}
            direction="column"
            size="sm"
            dark={false}
            quantity={productQuantity}
            onMinusClick={() => decrementQuantity(product.id)}
            onPlusClick={() => incrementQuantity(product.id)}
          />
        )}
      </ImageBackground>
    </Pressable>
  );
}
