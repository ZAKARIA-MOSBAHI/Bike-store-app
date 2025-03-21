import React from 'react';
import {ImageBackground, View} from 'react-native';
import {styles} from './HomeScreenStyle';
import Footer from '../../components/Footer/Footer';
import CardsList from './components/CardsList/CardsList';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import SearchView from './components/SearchView/SearchView';
import {useProductStore} from '../../store/stores/productStore';
import useSearch from '../../hooks/useSearch';
const background = require('../../assets/images/Background.png');
export default function HomeScreen() {
  const {products} = useProductStore();
  const {
    handleUserSearch,
    isActive,
    setIsActive,
    searchResult,
    filteredProducts,
    filterSearchResults,
  } = useSearch(products);

  return (
    <>
      <SearchHeader
        text={'Choose Your Bike'}
        isActive={isActive}
        setIsActive={setIsActive}
        handleUserSearch={handleUserSearch}
      />
      {isActive && (
        <SearchView
          searchResult={searchResult}
          filteredList={filteredProducts}
          filter={filterSearchResults}
        />
      )}
      <View style={styles.container}>
        <ImageBackground
          source={background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <View style={styles.viewstyle}>
          <CardsList />
        </View>
      </View>
      <Footer />
    </>
  );
}
