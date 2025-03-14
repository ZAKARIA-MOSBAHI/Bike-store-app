import React, {useState} from 'react';
import {ImageBackground, View, Text, Image, Pressable} from 'react-native';
import {styles} from './CardStyle';
import HeartIcon from '../../../../assets/icons/HeartIcon';
import {typography} from '../../../../styles/typography';
import {useNavigation} from '@react-navigation/native';

const bg = require('../../../../assets/images/card.png');
export default function Card({styling, product}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();
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
      </ImageBackground>
    </Pressable>
  );
}
