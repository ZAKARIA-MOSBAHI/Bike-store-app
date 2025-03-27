import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors} from '../../../../styles/colors';

export const styles = ScaledSheet.create({
  listContentStyle: {
    paddingBottom: '120@vs',
    marginTop: '10@s',
  },

  cardContainer: {
    flex: 1,
    width: '155@s',
    height: '256@s',
    marginLeft: '16@s',
    paddingBlock: '32@s',
  },
  fixedCategoryBarContainer: {
    position: 'absolute',
    top: '0@s',
    zIndex: 100,
    left: '0@s',
    width: '100%',
    backgroundColor: colors.background,
  },
  fixedCategoryBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBlock: '10@s',
  },
});
