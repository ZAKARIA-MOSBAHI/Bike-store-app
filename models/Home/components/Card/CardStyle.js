import {
  moderateScale,
  scale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters/extend';
import {colors} from '../../../../styles/colors';

export const styles = ScaledSheet.create({
  card: {
    width: scale(165),
  },
  background: {
    height: verticalScale(250),
    zIndex: 0,
  },
  productImageContainer: {
    width: '100%',
    height: verticalScale(80),
    position: 'absolute',
    top: scale(30),
    flex: 1,
    alignItems: 'center',
  },
  productImage: {
    width: moderateScale(120, 0.8),
    height: '100%',
    top: moderateScale(12, 0.8),
    resizeMode: 'contain',
  },
  heartBtn: {
    position: 'absolute',
    right: scale(15),
    top: scale(-5),
  },

  cardinfo: {
    paddingInline: scale(8),
    width: '100%',
    position: 'absolute',
    bottom: scale(32),
  },
  category: {
    color: colors.gray,
  },
  name: {
    color: '#fff',
  },
  price: {
    color: colors.gray,
  },
  quantityCounterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityCounter: {
    padding: scale(10),
  },
});
