import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors} from '../../../styles/colors';
import {typography} from '../../../styles/typography';
export const styles = ScaledSheet.create({
  inputsContainer: {gap: '16@s'},
  input: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 8,
    paddingTop: '16@vs',
    paddingBottom: '16@vs',
    paddingLeft: '16@s',
    fontSize: '16@s',
  },
  passwordInputContainer: {
    position: 'relative',
  },
  btnsContainer: {gap: '16@s'},
  btn: {paddingVertical: '16@vs', borderRadius: 8},
  btnPrimary: {
    backgroundColor: colors.secondary,
  },
  primaryBtnText: {
    ...typography.h3,
    color: '#fff',
    fontWeight: 'medium',
    textAlign: 'center',
  },
  btnOutline: {
    borderColor: colors.secondary,
    borderWidth: 1,
  },
  outlineBtnText: {
    color: colors.secondary,
    fontWeight: 'medium',
    textAlign: 'center',
    ...typography.h3,
  },
  error: {
    color: '#E3242B',
    margin: '8@s',
  },
  forgotPassword: {
    color: colors.secondary,
    textDecorationLine: 'underline',
    textAlign: 'right',
    marginTop: '4@s',
  },
  passwordIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{translateY: '-45%'}],
  },
});
