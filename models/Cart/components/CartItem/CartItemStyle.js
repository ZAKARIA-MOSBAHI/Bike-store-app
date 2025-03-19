import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors} from '../../../../styles/colors';

export const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    gap: '16@s',
    paddingInline: '10@s',
    paddingBlock: '20@vs',
  },
  productBgImage: {width: '90@s', height: '90@vs'},
  productImg: {width: '90%', height: '100%', marginInline: 'auto'},
  itemInfoContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginBlock: '10@vs',
  },
  productName: {color: 'white', fontWeight: 'bold'},
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '4@vs',
    paddingRight: '8@s',
  },
  productPrice: {color: colors.secondary, fontWeight: 'bold'},

  cartDivider: {
    width: '100%',
    height: '0.5@vs',
    backgroundColor: colors.gray,
    opacity: 0.3,
  },
});
