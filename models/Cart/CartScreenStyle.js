import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors} from '../../styles/colors';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    position: 'relative',
  },
  footerContainer: {
    padding: 20,

    position: 'absolute',
    backgroundColor: colors.background,
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    paddingBlock: '14@vs',
  },
});
