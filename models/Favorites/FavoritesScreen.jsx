import React, {useState, useCallback} from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';
import {styles} from './FavoritesScreenStyle';
import {useFavoriteStore} from '../../store/stores/favoriteStore';
import ProductHorizontalCard from '../../components/ProductHorizontalCard/ProductHorizontalCard';
import Header from '../../components/Header/Header';
import {colors} from '../../styles/colors';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useNavigation} from '@react-navigation/native';
import TextBtn from '../../components/ui/TextBtn';

export default function FavoritesScreen() {
  const navigation = useNavigation();
  const {favorites, removeFavorite} = useFavoriteStore();
  const [checkedItems, setCheckedItems] = useState({});

  // Derived state for select all
  const allSelected =
    favorites.length > 0 && favorites.every(item => checkedItems[item.id]);

  // Toggle all checkboxes
  const toggleAllCheckboxes = useCallback(() => {
    const newState = {};
    const shouldSelectAll = !allSelected;

    favorites.forEach(item => {
      newState[item.id] = shouldSelectAll;
    });

    setCheckedItems(newState);
  }, [favorites, allSelected]);

  // Handle individual checkbox toggle
  const handleCheckboxToggle = useCallback(item => {
    setCheckedItems(prev => ({
      ...prev,
      [item.id]: !prev[item.id],
    }));
  }, []);

  // Remove selected items
  const handleRemoveItems = useCallback(() => {
    const idsToRemove = Object.keys(checkedItems)
      .filter(id => checkedItems[id])
      .map(Number);

    idsToRemove.forEach(id => removeFavorite(id));
    setCheckedItems({}); // Reset state after deletion
  }, [checkedItems, removeFavorite]);

  // Remove single item
  const handleRemoveSingleItem = useCallback(
    id => {
      removeFavorite(id);
      setCheckedItems(prev => {
        const newState = {...prev};
        delete newState[id];
        return newState;
      });
    },
    [removeFavorite],
  );

  // Check if any items are selected
  const hasSelectedItems = Object.values(checkedItems).some(Boolean);

  return (
    <View style={styles.container}>
      <FlatList
        removeClippedSubviews={false}
        contentContainerStyle={{flexGrow: 1}}
        data={favorites}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={
          <>
            <Header
              btnType="back"
              onBtnPress={() => navigation.goBack()}
              text="Favorites"
              iconRight={false}
            />
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
          </>
        }
        ListFooterComponent={
          hasSelectedItems && (
            <TextBtn style={styles.ctaContainer}>
              <Text style={styles.cta}>Add Selected to Cart</Text>
            </TextBtn>
          )
        }
        renderItem={({item}) => (
          <ProductHorizontalCard
            checked={!!checkedItems[item.id]}
            withCheckbox={true}
            onCheckboxCheck={() => handleCheckboxToggle(item)}
            withCloseBtn={true}
            onCloseBtnClick={() => handleRemoveSingleItem(item.id)}
            item={item}
          />
        )}
      />
    </View>
  );
}
