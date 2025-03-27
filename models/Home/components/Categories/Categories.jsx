import React, {useEffect, useState} from 'react';
import {View, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../../styles/colors';
import {styles} from './CategoriesStyle';
import {scale} from 'react-native-size-matters';
import {useCategoryStore} from '../../../../store/stores/categoryStore';
export default function Categories({linear = true, style, filter}) {
  const {categories, chosenCategory, setChoosenCategory} = useCategoryStore();
  // state for categories to cause re-render
  const [categoriesState, setCategoriesState] = useState();
  useEffect(() => {
    setCategoriesState(chosenCategory);
    return () => {
      setChoosenCategory('All');
    };
  }, [categoriesState]);
  return (
    <View style={[styles.container, style]}>
      {categories.map((c, i) => (
        <Pressable
          key={i}
          style={
            linear
              ? [
                  styles.item,
                  {
                    left: scale(70) * i,
                    bottom: scale(10) * i,
                  },
                ]
              : null
          }
          onPress={() => {
            setChoosenCategory(c.name);
            filter(c.name);
          }}>
          <LinearGradient
            key={i}
            colors={
              chosenCategory === c.name
                ? colors.gradientPrimary
                : colors.gradientDark
            }
            start={{x: 0, y: 0}}
            end={{y: 1, x: 1}}
            style={styles.gradient}>
            {c.icon}
          </LinearGradient>
        </Pressable>
      ))}
    </View>
  );
}
