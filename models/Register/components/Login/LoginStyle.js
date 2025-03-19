import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors} from '../../../../styles/colors';
import {typography} from '../../../../styles/typography';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  childContainer: {maxWidth: '310@s', width: '100%', gap: '28@s'},
  header: {
    ...typography.h1,
    color: '#fff',
  },
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
  footer: {flexDirection: 'row', gap: '8@s', justifyContent: 'flex-end'},
  footerText: {...typography.p, color: '#fff', textAlign: 'right'},
  footerAction: {
    ...typography.p,
    color: colors.secondary,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
