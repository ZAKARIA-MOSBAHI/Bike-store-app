import React from 'react';
import {Image, Text, View} from 'react-native';
import {typography} from '../../../styles/typography';
import {useAppStore} from '../../../store/store';

const profileImage = require('../../../assets/images/profile.jpg');
export default function ProfileHeader() {
  const {user} = useAppStore();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 24,
        paddingVertical: 24,
        paddingHorizontal: 16,
      }}>
      <View style={{width: 80, height: 80}}>
        <Image
          source={profileImage}
          style={{width: '100%', height: '100%', borderRadius: 100}}
          resizeMode="cover"
        />
      </View>
      <View>
        <Text style={[typography.h2, {color: 'white'}]}>Zakaria</Text>
        <Text style={[typography.p, {color: 'gray'}]}>{user.email}</Text>
      </View>
    </View>
  );
}
