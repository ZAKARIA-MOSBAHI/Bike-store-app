import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useAppStore} from '../../store/store';
import {useNavigation} from '@react-navigation/native';
import {styles} from './ProfileScreenStyle';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import Tab from './Tab/Tab';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const {isLoggedIn} = useAppStore();
  useEffect(() => {
    if (isLoggedIn === false) {
      navigation.replace('Login');
    }
  }, []);
  const Tabs = [
    'Orders',
    'Favorites',
    'My Details',
    'Delivery Address',
    'Payment Methods',
    'Notifications',
    'Help',
    'About',
  ];
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<ProfileHeader />}
        data={Tabs}
        renderItem={({item, index}) => (
          <Tab
            title={item}
            style={
              index === 0 ? {borderTopWidth: 1, borderTopColor: 'gray'} : null
            }
          />
        )}
      />
    </View>
  );
}
