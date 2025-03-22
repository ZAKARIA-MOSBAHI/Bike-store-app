import React from 'react';
import {Pressable, Text} from 'react-native';

export default function Tab({item, style}) {
  const IconComponent = item.icon;
  return (
    <Pressable
      style={[
        {
          gap: 16,
          paddingVertical: 16,
          paddingHorizontal: 16,
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
        },
        style,
      ]}>
      <IconComponent width={36} height={36} />
      <Text style={{fontSize: 20, color: 'white'}}>{item.name}</Text>
    </Pressable>
  );
}
