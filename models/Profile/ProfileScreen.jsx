import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useAppStore} from '../../store/store';
import {useNavigation} from '@react-navigation/native';
import {styles} from './ProfileScreenStyle';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import Tab from './Tab/Tab';
import BagIcon from '../../assets/icons/BagIcon';
import HeartIcon from '../../assets/icons/HeartIcon';
import DetailsIcon from '../../assets/icons/DetailsIcon';
import AdressIcon from '../../assets/icons/AdressIcon';
import PaymentMethodIcon from '../../assets/icons/PaymentMethodIcon';
import NotificationIcon from '../../assets/icons/NotificationIcon';
import HelpIcon from '../../assets/icons/HelpIcon';
import AboutIcon from '../../assets/icons/AboutIcon';
import ProfileFooter from './ProfileFooter/ProfileFooter';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const {isLoggedIn} = useAppStore();

  useEffect(() => {
    if (isLoggedIn === false) {
      navigation.replace('Login');
    }
  }, [isLoggedIn]);

  const Tabs = [
    {
      name: 'Orders',
      icon: BagIcon,
    },
    {
      name: 'Favorites',
      icon: HeartIcon,
      route: 'Favorites',
    },
    {
      name: 'My Details',
      icon: DetailsIcon,
    },

    {
      name: 'Delivery Address',
      icon: AdressIcon,
    },
    {
      name: 'Payment Methods',
      icon: PaymentMethodIcon,
    },
    {
      name: 'Notifications',
      icon: NotificationIcon,
    },
    {
      name: 'Help',
      icon: HelpIcon,
    },
    {
      name: 'About',
      icon: AboutIcon,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        removeClippedSubviews={false}
        keyExtractor={(item, index) => item.name + index}
        ListHeaderComponent={<ProfileHeader />}
        ListFooterComponent={<ProfileFooter />}
        data={Tabs}
        renderItem={({item, index}) => (
          <Tab
            item={item}
            style={
              index === 0 ? {borderTopWidth: 1, borderTopColor: 'gray'} : null
            }
          />
        )}
      />
    </View>
  );
}
