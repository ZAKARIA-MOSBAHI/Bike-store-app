import {ScaledSheet} from 'react-native-size-matters/extend';
import {typography} from '../../../styles/typography';

export const styles = ScaledSheet.create({
  btn: {
    flexDirection: 'row',
    width: '80%',
    paddingHorizontal: '16@s',
    justifyContent: 'center',
    gap: '16@s',
    paddingVertical: '16@vs',
    borderRadius: 9,
    alignSelf: 'center',
    marginVertical: '16@vs',
    mixBlendMode: 'screen',
  },
  btnText: {
    ...typography.h3,
    fontWeight: 'bold',
    color: '#fff',
  },
});
