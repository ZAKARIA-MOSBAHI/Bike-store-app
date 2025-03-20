import React from 'react';
import {View, Text} from 'react-native';
import {typography} from '../../styles/typography';
import Button from '../ui/Button';
import {styles} from './HeaderStyle';
import {scale} from 'react-native-size-matters/extend';

export default function Header({
  text,
  iconRight = true,
  textStyle,
  btnType,
  onBtnPress,
}) {
  return (
    <View style={styles.header}>
      <View style={styles.child}>
        {!iconRight && (
          <Button
            type={btnType}
            onPress={onBtnPress}
            containerStyle={{borderRadius: scale(8)}}
          />
        )}
        <Text style={[styles.title, typography.h2, textStyle]}>{text}</Text>
        {iconRight && (
          <Button
            type={btnType}
            onPress={onBtnPress}
            containerStyle={{borderRadius: scale(8)}}
          />
        )}
      </View>
    </View>
  );
}
