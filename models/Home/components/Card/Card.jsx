import React, {useEffect, useState} from 'react';
import {ImageBackground, View, Text, Image, Pressable} from 'react-native';
import {styles} from './CardStyle';
import HeartIcon from '../../../../assets/icons/HeartIcon';
import {typography} from '../../../../styles/typography';
import {useNavigation} from '@react-navigation/native';
import QuantityCounter from '../../../../components/QuantityCounter/QuantityCounter';
import {useAppStore} from '../../../../store/store';
import {useFavoriteStore} from '../../../../store/stores/favoriteStore';

const bg = require('../../../../assets/images/card.png');
export default function Card({styling, product}) {
  const {cart, incrementQuantity, decrementQuantity, addToCart} = useAppStore();
  const {addFavorite, favorites, removeFavorite} = useFavoriteStore();

  const [isFavorite, setIsFavorite] = useState(false);
  const [productQuantity, setProductQuantity] = useState(0);
  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(product);
    } else {
      addFavorite(product);
    }
  };
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
  useEffect(() => {
    const productIsFavored = favorites.find(item => item.id === product.id);
    if (productIsFavored) {
      setIsFavorite(true);
    }
  }, [isFavorite, favorites, product]);
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
          <Pressable onPress={() => handleFavorite()} style={styles.heartBtn}>
            <HeartIcon isFavorite={isFavorite} />
          </Pressable>
        </View>
        <View style={[styles.cardinfo]}>
          <Text style={[styles.category, typography.h4]}>
            {product.category}
          </Text>
          <Text style={[styles.name, typography.p]}>{product.name}</Text>

          <View style={styles.quantityCounterContainer}>
            <Text style={[styles.price, typography.h4]}>$ {product.price}</Text>
            <QuantityCounter
              style={styles.quantityCounter}
              size="xs"
              dark={false}
              quantity={productQuantity}
              onMinusClick={() =>
                productQuantity > 0 ? decrementQuantity(product.id) : null
              }
              onPlusClick={() =>
                productQuantity > 0
                  ? incrementQuantity(product.id)
                  : addToCart(product)
              }
            />
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
}
