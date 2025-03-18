import React from 'react';
import {Text, TextInput, View} from 'react-native';
import Button from '../ui/Button';
import {styles} from './SearchHeaderStyle';
import {typography} from '../../styles/typography';

export default function SearchHeader({
  text,
  handleUserSearch,
  textStyle,
  isActive,
  setIsActive,
}) {
  return (
    <View style={styles.header}>
      <View style={styles.child}>
        {isActive && (
          <TextInput
            onChangeText={input => handleUserSearch(input)}
            placeholder="Search for items"
            style={[styles.inputStyle, typography.p]}
            placeholderTextColor={'#fff'}
          />
        )}
        {!isActive && (
          <Text style={[styles.title, typography.h2, textStyle]}>{text}</Text>
        )}
        <Button
          type={isActive ? 'close' : 'search'}
          onPress={() => {
            setIsActive(!isActive);
          }}
        />
      </View>
    </View>
  );
}
