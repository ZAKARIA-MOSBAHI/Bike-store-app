import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useAppStore} from '../../store/store';
import {useNavigation} from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const {user} = useAppStore();
  useEffect(() => {
    if (!user.email && !user.password) {
      navigation.replace('Login');
    }
  }, []);
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
}
