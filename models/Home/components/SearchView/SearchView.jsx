import React from 'react';
import {FlatList, KeyboardAvoidingView, Text} from 'react-native';
import {styles} from './SearchViewStyle';
import ProductHorizontalCard from '../../../../components/ProductHorizontalCard/ProductHorizontalCard';
import {typography} from '../../../../styles/typography';
import Categories from '../Categories/Categories';

export default function SearchView({filteredList, filter}) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Categories
        listToFilter={filteredList}
        filter={filter}
        linear={false}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBlock: 10,
        }}
      />
      <FlatList
        data={filteredList}
        renderItem={({item}) => <ProductHorizontalCard item={item} />}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <Text
            style={[
              typography.h3,
              {
                textAlign: 'center',
                color: 'white',
              },
            ]}>
            No Products Found
          </Text>
        }
      />
    </KeyboardAvoidingView>
  );
}
