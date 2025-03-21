import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, TextInput, View} from 'react-native';
import TextBtn from '../../../../components/ui/TextBtn';
import {typography} from '../../../../styles/typography';
import {styles} from './CheckoutBtnStyle';
import {colors} from '../../../../styles/colors';
import Button from '../../../../components/ui/Button';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  runOnJS,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {scale} from 'react-native-size-matters/extend';

const inputBackground = require('../../../../assets/images/coupon-input-background.png');

export default function CheckoutBtn() {
  //since the re-animated run in the ui thread for better performance it's not
  //used to make async functions
  const [isDragged, setIsDragged] = useState(false);
  const navigation = useNavigation();
  const translateX = useSharedValue(0);
  const AnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));
  const panGesture = Gesture.Pan()
    .onStart(() => runOnJS(setIsDragged)(true))

    .onChange(e => {
      if (e.translationX > 124) {
        runOnJS(navigation.push)('Checkout');
      }
      if (e.translationX < 0) {
        return;
      } else {
        translateX.value = e.translationX;
      }
    })
    .onEnd(() => {
      translateX.value = 0;
      runOnJS(setIsDragged)(false);
    });

  return (
    <ImageBackground source={inputBackground} style={styles.container}>
      <View style={styles.couponInputContainer}>
        <GestureDetector gesture={panGesture}>
          <Animated.View style={[AnimatedStyle, {zIndex: 10}]}>
            <Button
              containerStyle={{borderRadius: scale(8)}}
              type="back"
              style={styles.btn}
            />
          </Animated.View>
        </GestureDetector>
        {!isDragged ? (
          <Text style={[typography.h3, {color: colors.gray}]}> Checkout</Text>
        ) : null}
      </View>
    </ImageBackground>
  );
}
