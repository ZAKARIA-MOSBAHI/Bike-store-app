import React from 'react';
import {View, Image} from 'react-native';

import {styles} from './HeroContainerStyle';

const Banner = require('../../../../assets/images/banner.png');
export default function HeroContainer() {
  return (
    <View style={styles.container}>
      <Image style={styles.Banner} source={Banner} />
    </View>
  );
}
