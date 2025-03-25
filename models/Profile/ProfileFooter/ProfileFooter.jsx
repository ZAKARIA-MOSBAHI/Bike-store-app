import React from 'react';
import TextBtn from '../../../components/ui/TextBtn';
import LogoutIcon from '../../../assets/icons/LogoutIcon';
import {Text} from 'react-native';
import {styles} from './ProfileFooterStyle';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAppStore} from '../../../store/store';
import {useFavoriteStore} from '../../../store/stores/favoriteStore';

export default function ProfileFooter() {
  const {resetUser} = useAppStore();
  const {resetFavorites} = useFavoriteStore();
  const navigation = useNavigation();
  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure to logout ?', [
      {
        text: 'Logout',
        onPress: async () => {
          await resetUser();
          await resetFavorites();
          navigation.replace('Home');
        },
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };
  return (
    <TextBtn style={styles.btn} onPress={handleLogout}>
      <LogoutIcon />
      <Text style={styles.btnText}>Log out</Text>
    </TextBtn>
  );
}
