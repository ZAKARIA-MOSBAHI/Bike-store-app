import React, {useEffect, useState} from 'react';
import {ImageBackground, Keyboard, Pressable, View} from 'react-native';
import {styles} from './FooterStyle';
import BicycleIcon from '../../assets/icons/BicycleIcon';
import MapIcon from '../../assets/icons/MapIcon';
import CartIcon from '../../assets/icons/CartIcon';
import PersonIcon from '../../assets/icons/PersonIcon';
import DocumentIcon from '../../assets/icons/DocumentIcon';
import {colors} from '../../styles/colors';
import {useNavigation, useRoute} from '@react-navigation/native';

const footerMenu = [
  {
    name: 'home',
    icon: BicycleIcon,
    route: 'Home',
  },
  {
    name: 'map',
    icon: MapIcon,
  },
  {
    name: 'cart',
    icon: CartIcon,
    route: 'Cart',
  },
  {
    name: 'document',
    icon: DocumentIcon,
  },
  {
    name: 'profile',
    icon: PersonIcon,
  },
];
const background = require('../../assets/images/footerBackground.png');
const activeBackground = require('../../assets/images/footerHighlight.png');
export default function Footer() {
  const [selectedItem, setSelectedItem] = useState('home');
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <>
      {!keyboardVisible && (
        <View>
          <View style={styles.footerContainer}>
            <View style={styles.footer}>
              <ImageBackground
                source={background}
                style={styles.footerBackground}
                resizeMode="cover"
              />

              {footerMenu.map((item, index) => (
                <Pressable
                  key={index}
                  style={styles.footerItem}
                  onPress={() => {
                    setSelectedItem(item.name);
                    item.route ? navigation.navigate(item.route) : null;
                  }}>
                  <ImageBackground
                    source={activeBackground}
                    style={[
                      styles.footerLinkActive,
                      selectedItem === item.name &&
                        styles.ImageBackgroundActive,
                    ]}
                    resizeMode="cover"
                  />
                  <item.icon
                    style={[
                      styles.footerIcon,
                      selectedItem === item.name && styles.iconActive,
                    ]}
                    fill={selectedItem === item.name ? '#fff' : colors.gray}
                  />
                </Pressable>
              ))}
            </View>
          </View>
          <View style={styles.hidden} />
        </View>
      )}
    </>
  );
}
