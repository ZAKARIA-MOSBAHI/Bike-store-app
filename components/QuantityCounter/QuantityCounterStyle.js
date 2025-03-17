import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors} from '../../styles/colors';

export const styles = ScaledSheet.create({
  quantityCounter: {
    backgroundColor: colors.dark,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productQuantity: {
    marginInline: '8@s',
    color: colors.gray,
    fontWeight: 'bold',
  },
  counterBtn: {
    width: '28@s',
    height: '28@vs',
    alignItems: 'center',
    justifyContent: 'center',
    mixBlendMode: 'screen',
  },
});
