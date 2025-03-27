import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, ImageBackground, View, Dimensions} from 'react-native';
import Header from '../../components/Header/Header';
import {styles} from './ProductScreenStyle';
import ProductImage from './components/ProductImage/ProductImage';
import ProductInfos from './components/ProductInfos/ProductInfos';
import {useProductStore} from '../../store/stores/productStore';
const background = require('../../assets/images/Background.png');

export default function ProductScreen() {
  const {products} = useProductStore();
  const [isOpen, setIsOpen] = useState(false);
  const [activeBtn, setActiveBtn] = useState(null);
  const [infosSectionHeight, setInfosSectionHeight] = useState(0);
  const opacity = useRef(new Animated.Value(0)).current;
  const route = useRoute();
  const routeParams = route.params;
  const product = products.find(p => p.id === routeParams.productId);
  const {width, height} = Dimensions.get('screen');
  const position = useRef(new Animated.Value(-width * 2)).current; // Start from -width (off-screen left)
  const navigation = useNavigation();
  const slidingAnim = useRef(new Animated.Value(0)).current;
  const viewRef = useRef(null);

  useEffect(() => {
    if (viewRef.current) {
      viewRef.current.measure((x, y, width, measuredHeight) => {
        setInfosSectionHeight(measuredHeight);
        slidingAnim.setValue(measuredHeight); // Set initial position to component's height
      });
    }
  }, []);

  const toggleInfosSliding = () => {
    const peekAmount = infosSectionHeight * 0.25; // Show 25% when closed

    Animated.timing(slidingAnim, {
      toValue: isOpen ? infosSectionHeight - peekAmount : 0,
      damping: 10,
      stiffness: 100,
      useNativeDriver: true,
    }).start(() => {
      setIsOpen(!isOpen);
    });
  };

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
  // ANIMATION FOR SLIDING THE PRODUCTS INFO SECTION
  useEffect(() => {
    if (infosSectionHeight > 0) {
      Animated.timing(slidingAnim, {
        toValue: 0, // Animate to bottom of the screen
        duration: 500,
        delay: 3000,
        useNativeDriver: true,
      }).start(() => setIsOpen(true));
    }
  }, [infosSectionHeight, slidingAnim]);

  return (
    <View style={styles.container}>
      <Header
        onBtnPress={
          isOpen
            ? () => {
                toggleInfosSliding();
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
              top: '5%',
            },
          ]}>
          <ProductImage isOpen={isOpen} product={product} />
        </Animated.View>

        <ProductInfos
          ref={viewRef} // Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
          slidingAnim={slidingAnim}
          animationController={toggleInfosSliding}
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
