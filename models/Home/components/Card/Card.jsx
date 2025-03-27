import React, {useMemo} from 'react';
import {ImageBackground, View, Text, Image, Pressable} from 'react-native';
import {styles} from './CardStyle';
import HeartIcon from '../../../../assets/icons/HeartIcon';
import {typography} from '../../../../styles/typography';
import {useNavigation} from '@react-navigation/native';
import QuantityCounter from '../../../../components/QuantityCounter/QuantityCounter';
import {useAppStore} from '../../../../store/store';
import {useFavoriteStore} from '../../../../store/stores/favoriteStore';

const bg = require('../../../../assets/images/card.png');
const defaultImg = require('../../../../assets/images/bicycle2.png');
const Card = ({styling, product}) => {
  const navigation = useNavigation();
  const {cart, incrementQuantity, decrementQuantity, addToCart} = useAppStore();
  const {addFavorite, favorites, removeFavorite} = useFavoriteStore();

  // Derived state using useMemo for better performance
  const productQuantity = useMemo(
    () => cart.find(item => item.id === product.id)?.quantity || 0,
    [cart, product.id],
  );

  const isFavorite = useMemo(
    () => favorites.some(fav => fav.id === product.id),
    [favorites, product.id],
  );

  const handleFavorite = () => {
    isFavorite ? removeFavorite(product.id) : addFavorite(product);
  };

  return (
    <Pressable
      style={styles.card}
      onPress={() => navigation.push('Product', {productId: product.id})}>
      <ImageBackground
        source={bg}
        resizeMode="stretch"
        style={[styles.background, styling]}>
        <View style={styles.productImageContainer}>
          <Image
            source={defaultImg} // Use dynamic image source
            style={styles.productImage}
          />
          <Pressable onPress={handleFavorite} style={styles.heartBtn}>
            <HeartIcon isFavorite={isFavorite} />
          </Pressable>
        </View>

        <View style={styles.cardinfo}>
          <Text style={[styles.category, typography.h4]}>
            {product.category.name}
          </Text>
          <Text style={[styles.name, typography.p]} numberOfLines={1}>
            {product.title}
          </Text>

          <View style={styles.quantityCounterContainer}>
            <Text style={[styles.price, typography.h4]}>
              ${product.price.toFixed(2)}
            </Text>

            <QuantityCounter
              containerStyle={{borderRadius: 4}}
              plusIconStyle={{width: 14, height: 14}}
              hide={productQuantity <= 0}
              style={styles.quantityCounter}
              size="sm"
              dark={false}
              quantity={productQuantity}
              onMinusClick={() => decrementQuantity(product.id)}
              onPlusClick={() =>
                productQuantity > 0
                  ? incrementQuantity(product.id)
                  : addToCart({...product, quantity: 1})
              }
            />
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default React.memo(Card);
