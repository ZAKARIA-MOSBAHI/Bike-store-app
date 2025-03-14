import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, ImageBackground, View, Dimensions} from 'react-native';
import Header from '../../components/Header/Header';
import {products} from '../../assets/products';
import {styles} from './ProductScreenStyle';
import ProductImage from './components/ProductImage/ProductImage';
import ProductInfos from './components/ProductInfos/ProductInfos';
const background = require('../../assets/images/Background.png');

export default function ProductScreen() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeBtn, setActiveBtn] = useState(null);
  const opacity = useRef(new Animated.Value(0)).current;
  const route = useRoute();
  const routeParams = route.params;
  const product = products.find(p => p.id === routeParams.productId);
  const {width, height} = Dimensions.get('window');
  const position = useRef(new Animated.Value(-width * 2)).current; // Start from -width (off-screen left)
  const navigation = useNavigation();

  useEffect(() => {
    // Create an animation sequence
    Animated.parallel([
      // Animate opacity
      Animated.timing(opacity, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
      // Animate position
      Animated.timing(position, {
        toValue: -width * 0.5,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();

    // Cleanup function to reset animations when component unmounts
    return () => {
      opacity.setValue(0);
      position.setValue(-width * 2);
    };
  }, [opacity, position, width]);

  return (
    <View style={styles.container}>
      <Header
        onBtnPress={
          isOpen
            ? () => {
                setIsOpen(false);
                setActiveBtn(null);
              }
            : () => navigation.goBack()
        }
        iconRight={false}
        text={product.name}
        textStyle={styles.headerTextStyle}
        btnType={isOpen ? 'hide' : 'back'}
      />
      <View style={styles.productInfos}>
        <Animated.View style={[styles.backgroundContainer, {opacity: opacity}]}>
          <ImageBackground
            source={background}
            style={styles.backgroundImg}
            resizeMode="cover"
          />
        </Animated.View>

        <Animated.View
          style={[
            styles.productImageContainer,
            {
              transform: [
                {translateX: position},
                {translateY: -height * 0.2},
                {scale: isOpen ? 0.5 : 1},
              ],
              top: isOpen ? '5%' : '50%',
            },
          ]}>
          <ProductImage isOpen={isOpen} product={product} />
        </Animated.View>

        <ProductInfos
          activeBtn={activeBtn}
          setActiveBtn={setActiveBtn}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          product={product}
          height={height}
        />
      </View>
    </View>
  );
}
