import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../styles/colors';
import SearchIcon from '../../assets/icons/SearchIcon';
import BackIcon from '../../assets/icons/BackIcon';
import HideIcon from '../../assets/icons/HideIcon';
import CloseIcon from '../../assets/icons/CloseIcon';
import PlusIcon from '../../assets/icons/PlusIcon';
import MinusIcon from '../../assets/icons/MinusIcon';

export default function Button({
  type = 'search',
  variant = 'default',
  onPress,
  iconStyle,
  style,
  containerStyle,
}) {
  const variants = {dark: colors.gradientDark, default: colors.gradientPrimary};
  const types = {
    search: {icon: SearchIcon},
    back: {icon: BackIcon},
    hide: {icon: HideIcon},
    close: {icon: CloseIcon},
    plus: {icon: PlusIcon},
    minus: {icon: MinusIcon},
  };
  const IconComponent = types[type].icon;
  return (
    <LinearGradient
      style={containerStyle}
      colors={variants[variant]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <Pressable style={style ? style : styles.btn} onPress={onPress}>
        <IconComponent style={iconStyle} />
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: scale(44),
    height: verticalScale(44),
    alignItems: 'center',
    justifyContent: 'center',
    mixBlendMode: 'screen',
  },
});
