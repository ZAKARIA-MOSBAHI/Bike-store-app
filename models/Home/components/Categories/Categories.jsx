import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../../styles/colors';
import BatteryIcon from '../../../../assets/icons/BatteryIcon';
import AccessoryIcon from '../../../../assets/icons/AccessoryIcon';
import MountainIcon from '../../../../assets/icons/MountainIcon';
import RoadIcon from '../../../../assets/icons/RoadIcon';
import {styles} from './CategoriesStyle';
import {scale} from 'react-native-size-matters';
import {typography} from '../../../../styles/typography';
const categories = [
  {
    name: 'All',
    icon: <Text style={[typography.p, {color: 'white'}]}>ALL</Text>,
  },
  {
    name: 'Electrics',
    icon: <BatteryIcon fillColor={colors.gray} />,
  },
  {
    name: 'Road',
    icon: <RoadIcon fillColor={colors.gray} />,
  },
  {
    name: 'Mountain',
    icon: <MountainIcon fillColor={colors.gray} />,
  },
  {
    name: 'Accessory',
    icon: <AccessoryIcon fillColor={colors.gray} />,
  },
];
export default function Categories() {
  const [chosenCategory, setChosenCategory] = useState('All');
  return (
    <View style={styles.container}>
      {categories.map((c, i) => (
        <Pressable
          key={i}
          style={[
            styles.item,
            {
              left: scale(70) * i,
              bottom: scale(10) * i,
            },
          ]}
          onPress={() => setChosenCategory(c.name)}>
          <LinearGradient
            key={i}
            colors={
              chosenCategory === c.name
                ? colors.gradientPrimary
                : colors.gradientDark
            }
            start={{x: 0, y: 0}}
            end={{y: 1, x: 1}}
            style={styles.gradient}>
            {c.icon}
          </LinearGradient>
        </Pressable>
      ))}
    </View>
  );
}
