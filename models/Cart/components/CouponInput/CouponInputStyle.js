import {ScaledSheet} from 'react-native-size-matters/extend';

export const styles = ScaledSheet.create({
  container: {
    borderColor: 'red',
    borderRadius: 10,
    height: '50@vs',
    width: '95%',
  },
  couponInputContainer: {
    height: '100%',
    flexDirection: 'row',
    gap: '4@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '60%',
    height: '100%',
    paddingLeft: '12@s',
  },
  applyBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingInline: '40@s',
    height: '100%',
  },
  textBtn: {color: '#fff', fontWeight: 'bold'},
});
