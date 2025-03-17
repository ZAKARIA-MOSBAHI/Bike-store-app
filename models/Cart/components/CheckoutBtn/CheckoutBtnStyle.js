import {ScaledSheet} from 'react-native-size-matters/extend';

export const styles = ScaledSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 10,
    height: '50@vs',
    width: '200@s',
  },
  couponInputContainer: {
    height: '100%',
    flexDirection: 'row',
    gap: '24@s',
    alignItems: 'center',
  },

  btn: {
    transform: [{rotate: '180deg'}],
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
