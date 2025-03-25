import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors} from '../../styles/colors';
import {typography} from '../../styles/typography';

export const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  actionsContainer: {
    paddingTop: '80@vs',
    paddingHorizontal: '24@s',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    ...typography.p,
    textDecorationLine: 'underline',
    color: colors.secondary,
  },
  deleteText: {
    ...typography.p,
    textDecorationLine: 'underline',
    color: 'red',
    alignSelf: 'flex-end',
  },
  ctaContainer: {
    marginVertical: '15@vs',
    alignSelf: 'center',
    paddingVertical: '12@vs',
    paddingHorizontal: '24@s',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    mixBlendMode: 'screen',
  },
  cta: {
    ...typography.p,
    color: '#fff',
    fontWeight: 'bold',
  },
});
