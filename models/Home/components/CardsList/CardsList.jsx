import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from './CardsListStyle';
import Card from '../Card/Card';
import {useProductStore} from '../../../../store/stores/productStore';
import {typography} from '../../../../styles/typography';
import {colors} from '../../../../styles/colors';
import HeroContainer from '../HeroContainer/HeroContainer';
import Categories from '../Categories/Categories';

export default function CardsList() {
  // this state is only used for the purpose of causing re-render
  const [componentProducts, setComponentProducts] = useState([]);
  const {filterProducts, getProducts, filteredProducts, products, loading} =
    useProductStore();

  useEffect(() => {
    getProducts(); // this to fetch the products
  }, []);
  useEffect(() => {
    setComponentProducts(products); // setting the state when the products change
  }, [products]);

  useEffect(() => {
    setComponentProducts(filteredProducts); // setting the state when the filtered change
  }, [filteredProducts]);
  // useEffect(() => {
  //   console.log(componentProducts);
  // }, [componentProducts]);

  return (
    <ScrollView>
      <HeroContainer />
      <Categories filter={filterProducts} />
      {componentProducts.length === 0 && loading ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <FlatList
          removeClippedSubviews={false}
          contentContainerStyle={styles.listContentStyle}
          style={styles.listStyle}
          numColumns={2}
          data={componentProducts}
          ListEmptyComponent={
            <Text
              style={[
                typography.h2,
                {textAlign: 'center', color: colors.gray, fontWeight: 'medium'},
              ]}>
              No Products Found
            </Text>
          }
          renderItem={({item}) => (
            <View key={item.id} style={styles.cardContainer}>
              <Card product={item} styling={item.style} />
            </View>
          )}
        />
      )}
    </ScrollView>
  );
}
