import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors} from '../../styles/colors';
import {typography} from '../../styles/typography';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  btn: {
    width: '80%',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 9,
    alignSelf: 'center',
    marginVertical: 16,
    mixBlendMode: 'screen',
  },
  btnText: {
    textAlign: 'center',
    ...typography.h3,
    fontWeight: 'bold',
    color: '#fff',
  },
});
