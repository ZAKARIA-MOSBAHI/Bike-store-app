import {ScaledSheet} from 'react-native-size-matters/extend';

export const styles = ScaledSheet.create({
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  productImage: {
    flex: 1,
    width: '90%',
    marginInline: 'auto',
    height: '100%',
  },
});
