import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  container: {
    position: 'relative',
    height: '50@vs',
    zIndex: 0,
    width: '100%',
    maxWidth: '320@s',
    alignSelf: 'center',
  },
  item: {
    position: 'absolute',
    zIndex: 2,
  },
  gradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '9@s',
    width: '48@s',
    height: '48@s',
  },
});
