import React, {forwardRef} from 'react';
import {Animated} from 'react-native';
import {styles} from './ProductInfoStyle';
import ButtonsRow from './components/ButtonsRow/ButtonsRow';
import ProductDesc from './components/ProductDesc/ProductDesc';
import ProductFooter from './components/ProductFooter/ProductFooter';
const ProductInfos = forwardRef((props, ref) => {
  const {
    isOpen,
    animationController,
    slidingAnim,
    activeBtn,
    setActiveBtn,
    product,
  } = props;
  return (
    <Animated.View
      ref={ref}
      style={[styles.container, {transform: [{translateY: slidingAnim}]}]}>
      <ButtonsRow
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
        animationController={animationController}
        isOpen={isOpen}
      />
      <ProductDesc product={product} />

      <ProductFooter product={product} />
    </Animated.View>
  );
});
export default ProductInfos;
