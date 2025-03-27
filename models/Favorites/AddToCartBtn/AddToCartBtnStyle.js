import {ScaledSheet} from 'react-native-size-matters/extend';
import {typography} from '../../../styles/typography';

export const styles = ScaledSheet.create({
  ctaContainer: {
    marginVertical: '15@vs',
    paddingVertical: '16@vs',
    paddingHorizontal: '32@s',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: [{translateX: '-50%'}],
    elevation: 10,
    zIndex: 20,
  },
  cta: {
    ...typography.h3,
    color: '#fff',
    fontWeight: 'bold',
  },
});
