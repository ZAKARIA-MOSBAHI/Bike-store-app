//TO ADD : IF THE FILTER IS SET BEFORE SEARCHING , APPLY IT AND THEN SEARCH
import React, {useCallback, useEffect, useState} from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';
import Categories from './components/Categories/Categories';
import HeroContainer from './components/HeroContainer/HeroContainer';
import {styles} from './HomeScreenStyle';
import Footer from '../../components/Footer/Footer';
import CardsList from './components/CardsList/CardsList';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import SearchView from './components/SearchView/SearchView';
import useDebounce from '../../hooks/useDebounce';
import {useProductStore} from '../../store/stores/productStore';
const background = require('../../assets/images/Background.png');
export default function HomeScreen() {
  const {products, filterProducts} = useProductStore();
  // IS ACTIVE : MEANS IF THE USER IS SEARCHING OR NOT
  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  // DELAYING THE SETTING OF SEARCH TEXT
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (debouncedSearchQuery.trim() === '') {
      setSearchResult([]);
      setFilteredList([]);
    } else {
      const result = products.filter(product =>
        product.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()),
      );
      setSearchResult(result);
      setFilteredList(result);
    }
  }, [debouncedSearchQuery, products]);
  // FUNCTION TO FILTER SEARCH RESULTS
  const filterSearchResults = category => {
    if (category.toLowerCase() === 'all') {
      setFilteredList(searchResult);
    } else {
      const filteredListResult = searchResult.filter(product =>
        product.category.toLowerCase().includes(category.toLowerCase()),
      );
      setFilteredList(filteredListResult);
    }
  };
  // FUNCTION TO SET THE USER INPUT
  const handleUserSearch = useCallback(input => {
    setSearchQuery(input);
  }, []);
  // INITIALIZING THE FILTER TO ALL
  useEffect(() => {
    filterProducts('All');
  }, [filterProducts]);
  // WHEN THE USER DISMISSES THE SEARCH VIEW , DELETE THE PREVIOUS SEARCH RESULTS
  useEffect(() => {
    if (!isActive) {
      setSearchResult([]);
      setFilteredList([]);
    }
  }, [isActive]);

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
          filteredList={filteredList}
          filter={filterSearchResults}
        />
      )}
      <View style={styles.container}>
        <ImageBackground
          source={background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <ScrollView style={styles.viewstyle}>
          <HeroContainer />
          <Categories filter={filterProducts} />
          <CardsList />
        </ScrollView>
      </View>
      <Footer />
    </>
  );
}
