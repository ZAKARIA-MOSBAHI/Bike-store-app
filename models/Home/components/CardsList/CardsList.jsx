import React, {useMemo, useRef, useEffect, useState} from 'react';
import {ActivityIndicator, Animated, FlatList, Text, View} from 'react-native';
import {styles} from './CardsListStyle';
import Card from '../Card/Card';
import {useProductStore} from '../../../../store/stores/productStore';
import HeroContainer from '../HeroContainer/HeroContainer';
import Categories from '../Categories/Categories';

export default function CardsList() {
  const {filterProducts, getProducts, filteredProducts, products, loading} =
    useProductStore();

  // Refs for layout and animation
  const categoriesPositionRef = useRef({
    y: 0,
    height: 0,
  });
  const slideAnim = useRef(new Animated.Value(0)).current;
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(true);

  // Derived products list using useMemo
  const componentProducts = useMemo(
    () => (filteredProducts.length > 0 ? filteredProducts : products),
    [filteredProducts, products],
  );

  // Animation effect
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isCategoriesVisible ? -100 : 0,
      useNativeDriver: true,
      friction: 8,
      tension: 40,
    }).start();
  }, [isCategoriesVisible]);

  // Initial data fetch
  useEffect(() => {
    getProducts();
  }, []);

  const handleCategoriesLayout = event => {
    const {y, height} = event.nativeEvent.layout;
    categoriesPositionRef.current = {y, height};
  };

  const handleScroll = event => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const {y, height} = categoriesPositionRef.current;
    setIsCategoriesVisible(currentOffset <= y + height);
  };

  // Opacity interpolation for smooth fade
  const opacity = slideAnim.interpolate({
    inputRange: [-100, 0],
    outputRange: [0, 1],
  });

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={[
          styles.fixedCategoryBarContainer,
          {
            transform: [{translateY: slideAnim}],
            opacity,
          },
        ]}>
        <Categories
          filter={filterProducts}
          style={styles.fixedCategoryBar}
          linear={false}
        />
      </Animated.View>

      <FlatList
        ListHeaderComponent={
          <>
            <HeroContainer />
            <View onLayout={handleCategoriesLayout}>
              <Categories filter={filterProducts} />
            </View>
          </>
        }
        ListEmptyComponent={
          loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" />
            </View>
          ) : (
            <Text style={styles.emptyText}>No Products Found</Text>
          )
        }
        data={componentProducts}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.cardContainer}>
            <Card product={item} />
          </View>
        )}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        numColumns={2}
        removeClippedSubviews={false}
        initialNumToRender={6}
        maxToRenderPerBatch={6}
        windowSize={11}
      />
    </View>
  );
}
