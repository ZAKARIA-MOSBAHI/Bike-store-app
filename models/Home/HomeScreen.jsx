import React from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';
import Categories from './components/Categories/Categories';
import HeroContainer from './components/HeroContainer/HeroContainer';
import {styles} from './HomeScreenStyle';

import Footer from '../../components/Footer/Footer';
import CardsList from './components/CardsList/CardsList';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
const background = require('../../assets/images/Background.png');
export default function HomeScreen() {
  return (
    <>
      <SearchHeader text={'Choose Your Bike'} />
      <View style={styles.container}>
        <ImageBackground
          source={background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <ScrollView style={styles.viewstyle}>
          <HeroContainer />
          <Categories />
          <CardsList />
        </ScrollView>
      </View>
      <Footer />
    </>
  );
}
