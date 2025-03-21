import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './CardsListStyle';
import Card from '../Card/Card';
import {useProductStore} from '../../../../store/stores/productStore';
import {typography} from '../../../../styles/typography';
import {colors} from '../../../../styles/colors';
import HeroContainer from '../HeroContainer/HeroContainer';
import Categories from '../Categories/Categories';

export default function CardsList() {
  const {filteredProducts, filterProducts} = useProductStore();
  useEffect(() => {
    filterProducts('All');
  }, [filterProducts]);
  return (
    <FlatList
      contentContainerStyle={styles.listContentStyle}
      style={styles.listStyle}
      numColumns={2}
      data={filteredProducts}
      ListHeaderComponent={
        <>
          <HeroContainer />
          <Categories filter={filterProducts} />
        </>
      }
      ListEmptyComponent={
        <Text
          style={[
            typography.h2,
            {textAlign: 'center', color: colors.gray, fontWeight: 'medium'},
          ]}>
          No Products Found
        </Text>
      }
      renderItem={({item, index}) => (
        <View key={index} style={styles.cardContainer}>
          <Card product={item} styling={item.style} />
        </View>
      )}
    />
  );
}
