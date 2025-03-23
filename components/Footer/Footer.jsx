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
    name: 'Home',
    icon: BicycleIcon,
    route: 'Home',
  },
  {
    name: 'Map',
    icon: MapIcon,
  },
  {
    name: 'Cart',
    icon: CartIcon,
    route: 'Cart',
  },
  {
    name: 'Document',
    icon: DocumentIcon,
  },
  {
    name: 'Profile',
    icon: PersonIcon,
    route: 'Profile',
  },
];
const background = require('../../assets/images/footerBackground.png');
const activeBackground = require('../../assets/images/footerHighlight.png');
export default function Footer() {
  const [selectedItem, setSelectedItem] = useState('home');
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
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
    console.log('route.name  ', route.name);
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  useEffect(() => {
    const currentPage = route.name;
    console.log('route.name  ', route.name); // this logs too many times
    setSelectedItem(currentPage);
  }, [route]);

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
                    item.route ? navigation.push(item.route) : null;
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
