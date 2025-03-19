import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors} from '../../styles/colors';
import {typography} from '../../styles/typography';

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

  footer: {flexDirection: 'row', gap: '8@s', justifyContent: 'flex-end'},
  footerText: {...typography.p, color: '#fff', textAlign: 'right'},
  footerAction: {
    ...typography.p,
    color: colors.secondary,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
