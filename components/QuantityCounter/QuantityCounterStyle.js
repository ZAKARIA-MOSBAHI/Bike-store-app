import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors} from '../../styles/colors';

export const styles = ScaledSheet.create({
  quantityCounter: {
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  productQuantity: {
    color: colors.gray,
    fontWeight: 'bold',
    marginInline: '8@s',
  },
  counterBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    mixBlendMode: 'screen',
  },
});
