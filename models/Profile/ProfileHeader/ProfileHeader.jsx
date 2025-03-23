import React from 'react';
import {Image, Text, View} from 'react-native';
import {useAppStore} from '../../../store/store';
import {styles} from './ProfileHeaderStyle';

const profileImage = require('../../../assets/images/profile.jpg');
export default function ProfileHeader() {
  const {user} = useAppStore();
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          source={profileImage}
          style={styles.profileImage}
          resizeMode="cover"
        />
      </View>
      <View>
        <Text style={styles.userName}>Zakaria</Text>
        <Text style={styles.userEmail}>{user ? user.email : ''}</Text>
      </View>
    </View>
  );
}
