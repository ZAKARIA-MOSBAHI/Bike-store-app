import React, {useState, useCallback} from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';
import {styles} from './FavoritesScreenStyle';
import {useFavoriteStore} from '../../store/stores/favoriteStore';
import ProductHorizontalCard from '../../components/ProductHorizontalCard/ProductHorizontalCard';
import Header from '../../components/Header/Header';
import {colors} from '../../styles/colors';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useNavigation} from '@react-navigation/native';
import AddToCartBtn from './AddToCartBtn/AddToCartBtn';
import {useProductStore} from '../../store/stores/productStore';
import {useAppStore} from '../../store/store';

export default function FavoritesScreen() {
  const navigation = useNavigation();
  const {getProductById} = useProductStore();
  const {addToCart} = useAppStore();
  const {favorites, removeFavorite} = useFavoriteStore();
  const [checkedItems, setCheckedItems] = useState({});

  // Derived state for select all
  const allSelected =
    favorites.length > 0 &&
    favorites.every(item => checkedItems[item.id.toString()]);

  // Toggle all checkboxes
  const toggleAllCheckboxes = useCallback(() => {
    const newState = {};
    const shouldSelectAll = !allSelected;

    favorites.forEach(item => {
      newState[item.id.toString()] = shouldSelectAll;
    });

    setCheckedItems(newState);
  }, [favorites, allSelected]);

  // Handle individual checkbox toggle
  const handleCheckboxToggle = useCallback(item => {
    setCheckedItems(prev => ({
      ...prev,
      [item.id.toString()]: !prev[item.id.toString()],
    }));
  }, []);

  // Remove selected items
  const handleRemoveItems = useCallback(() => {
    const idsToRemove = Object.keys(checkedItems)
      .filter(id => checkedItems[id])
      .map(id => parseInt(id));

    idsToRemove.forEach(id => removeFavorite(id));
    setCheckedItems({});
  }, [checkedItems, removeFavorite]);

  // Remove single item
  const handleRemoveSingleItem = useCallback(
    id => {
      removeFavorite(id);
      setCheckedItems(prev => {
        const newState = {...prev};
        delete newState[id.toString()];
        return newState;
      });
    },
    [removeFavorite],
  );
  const handleAddToCart = () => {
    const selectedIds = Object.keys(checkedItems).filter(
      id => checkedItems[id],
    );

    const itemsToAddToCart = selectedIds
      .map(id => getProductById(parseInt(id)))
      .filter(Boolean);

    // Add items to cart first
    itemsToAddToCart.forEach(item => addToCart(item));

    // Remove favorites outside of the setCheckedItems updater
    selectedIds.forEach(id => removeFavorite(parseInt(id)));

    // Then update the checkedItems state
    setCheckedItems(prev => {
      const newState = {...prev};
      selectedIds.forEach(id => delete newState[id]);
      return newState;
    });
  };

  // Check if any items are selected AND favorites list is not empty
  const hasSelectedItems =
    favorites.length > 0 && Object.values(checkedItems).some(Boolean);

  return (
    <View style={styles.container}>
      <Header
        btnType="back"
        onBtnPress={() => navigation.goBack()}
        text="Favorites"
        iconRight={false}
      />
      <FlatList
        removeClippedSubviews={false}
        contentContainerStyle={{flexGrow: 1}}
        data={favorites}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={
          <View style={styles.actionsContainer}>
            <View style={styles.textContainer}>
              <BouncyCheckbox
                size={24}
                fillColor={colors.secondary}
                iconStyle={{borderColor: colors.secondary}}
                innerIconStyle={{borderWidth: 1}}
                onPress={toggleAllCheckboxes}
                isChecked={allSelected}
                disableBuiltInState
              />
              <Text style={styles.text}>Select All</Text>
            </View>
            {hasSelectedItems && (
              <Pressable
                onPress={handleRemoveItems}
                style={styles.deleteButton}>
                <Text style={styles.deleteText}>Delete Selected</Text>
              </Pressable>
            )}
          </View>
        }
        renderItem={({item}) => (
          <ProductHorizontalCard
            checked={!!checkedItems[item.id.toString()]}
            withCheckbox={true}
            onCheckboxCheck={() => handleCheckboxToggle(item)}
            withCloseBtn={true}
            onCloseBtnClick={() => handleRemoveSingleItem(item.id)}
            item={item}
          />
        )}
      />
      <AddToCartBtn onPress={handleAddToCart} show={hasSelectedItems} />
    </View>
  );
}
