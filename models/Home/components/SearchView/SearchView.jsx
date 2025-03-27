import React from 'react';
import {FlatList, KeyboardAvoidingView, Text} from 'react-native';
import {styles} from './SearchViewStyle';
import ProductHorizontalCard from '../../../../components/ProductHorizontalCard/ProductHorizontalCard';
import Categories from '../Categories/Categories';

export default function SearchView({filteredList, filter}) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Categories
        listToFilter={filteredList}
        filter={filter}
        linear={false}
        style={styles.categoryBar}
      />
      <FlatList
        removeClippedSubviews={false}
        data={filteredList}
        renderItem={({item}) => <ProductHorizontalCard item={item} />}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No Products Found</Text>
        }
      />
    </KeyboardAvoidingView>
  );
}
