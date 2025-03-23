import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './FavoritesScreenStyle';
import {useFavoriteStore} from '../../store/stores/favoriteStore';
import ProductHorizontalCard from '../../components/ProductHorizontalCard/ProductHorizontalCard';

export default function FavoritesScreen() {
  const {favorites, removeFavorite} = useFavoriteStore();

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        removeClippedSubviews={false}
        data={favorites}
        keyExtractor={item => item.id}
        ListHeaderComponent={<Text style={styles.title}>Favorite Items</Text>}
        renderItem={({item}) => (
          <ProductHorizontalCard
            withCloseBtn={true}
            onCloseBtnClick={() => removeFavorite(item)}
            item={item}
          />
        )}
      />
    </View>
  );
}
