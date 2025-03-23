import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors} from '../../styles/colors';
import {typography} from '../../styles/typography';

export const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    gap: '16@s',
    paddingInline: '10@s',
    paddingBlock: '30@vs',
    position: 'relative',
  },
  productBgImage: {width: '90@s', height: '100@vs', justifySelf: 'center'},
  productImg: {width: '90%', height: '100%', marginInline: 'auto'},
  itemInfoContainer: {
    flex: 1,
    gap: '8@s',
    justifyContent: 'space-between',
  },
  productName: {...typography.p, color: 'white', fontWeight: 'bold'},
  productDescription: {color: colors.gray},
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {...typography.p, color: colors.secondary, fontWeight: 'bold'},

  cartDivider: {
    width: '100%',
    height: '0.5@vs',
    backgroundColor: colors.gray,
    opacity: 0.3,
  },
  closeBtn: {
    position: 'relative',
    top: '5@vs',
    right: '10@s',
  },
});
