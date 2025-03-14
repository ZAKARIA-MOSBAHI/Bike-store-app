import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './CardsListStyle';
import Card from '../Card/Card';
import {products} from '../../../../assets/products';

export default function CardsList() {
  return (
    <FlatList
      contentContainerStyle={styles.listContentStyle}
      style={styles.listStyle}
      numColumns={2}
      data={products}
      renderItem={({item, index}) => (
        <View key={index} style={styles.cardContainer}>
          <Card product={item} styling={item.style} />
        </View>
      )}
    />
  );
}
