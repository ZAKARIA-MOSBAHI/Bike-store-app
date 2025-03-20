import React from 'react';
import {create} from 'zustand';
import {typography} from '../../styles/typography';
import {Text} from 'react-native';
import {colors} from '../../styles/colors';
import BatteryIcon from '../../assets/icons/BatteryIcon';
import RoadIcon from '../../assets/icons/RoadIcon';
import MountainIcon from '../../assets/icons/MountainIcon';
import AccessoryIcon from '../../assets/icons/AccessoryIcon';

export const useCategoryStore = create(set => ({
  categories: [
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
      name: 'Accessories',
      icon: <AccessoryIcon fillColor={colors.gray} />,
    },
  ],
}));
