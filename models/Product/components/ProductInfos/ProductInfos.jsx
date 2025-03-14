import React from 'react';
import {View} from 'react-native';

import {styles} from './ProductInfoStyle';
import ButtonsRow from './components/ButtonsRow/ButtonsRow';
import ProductDesc from './components/ProductDesc/ProductDesc';
import ProductFooter from './components/ProductFooter/ProductFooter';

export default function ProductInfos({
  isOpen,
  activeBtn,
  setActiveBtn,
  product,
  setIsOpen,
}) {
  return (
    <View
      style={[styles.container, isOpen ? styles.modalOpen : styles.modalClose]}>
      <ButtonsRow
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <ProductDesc product={product} />

      <ProductFooter product={product} />
    </View>
  );
}
