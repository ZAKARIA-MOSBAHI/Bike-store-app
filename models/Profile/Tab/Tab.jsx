import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text} from 'react-native';

export default function Tab({item, style}) {
  const navigation = useNavigation();
  const IconComponent = item.icon;
  const handlePress = () => {
    if (item.route) {
      navigation.push(item.route);
    }
  };
  return (
    <Pressable
      onPress={handlePress}
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
      <IconComponent width={34} height={34} />
      <Text style={{fontSize: 18, color: 'white'}}>{item.name}</Text>
    </Pressable>
  );
}
