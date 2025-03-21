import React from 'react';
import {Text, View} from 'react-native';

export default function Tab({title, style}) {
  return (
    <View
      style={[
        {
          paddingVertical: 24,
          paddingHorizontal: 16,

          borderBottomColor: 'gray',
          borderBottomWidth: 1,
        },
        style,
      ]}>
      <Text style={{fontSize: 20, color: 'white'}}>{title}</Text>
    </View>
  );
}
