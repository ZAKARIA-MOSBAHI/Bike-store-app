import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {typography} from '../../../../../../styles/typography';
import {styles} from './ButtonsRowStyle';

const btnNotActiveBg = require('../../../../../../assets/images/btn-not-active.png');
const btnActiveBg = require('../../../../../../assets/images/btn-active.png');

export default function ButtonsRow({setActiveBtn, setIsOpen, activeBtn}) {
  const buttons = ['Description', 'Specification'];
  return (
    <View style={styles.buttonsRow}>
      {buttons.map((btn, ind) => (
        <Pressable
          style={[{position: 'relative'}]}
          key={ind}
          onPress={() => {
            setActiveBtn(btn);
            setIsOpen(true);
          }}>
          <Image
            source={activeBtn === btn ? btnActiveBg : btnNotActiveBg}
            style={[
              styles.btnImgBg,
              activeBtn === btn && {transform: [{scale: 1.3}]},
            ]}
          />
          <Text
            style={[
              typography.h3,
              styles.textBtn,
              activeBtn === btn
                ? styles.btnActiveText
                : styles.btnNotActiveText,
            ]}>
            {btn}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
