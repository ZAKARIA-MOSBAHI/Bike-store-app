import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors} from '../../styles/colors';

export const styles = ScaledSheet.create({
  header: {
    height: '70@s',
    zIndex: 2,
    backgroundColor: colors.background,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  child: {
    paddingInline: '12@s',
    width: '390@s',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
  },
});
