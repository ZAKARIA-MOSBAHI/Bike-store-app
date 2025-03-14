import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors} from '../../../../../../styles/colors';
export const styles = ScaledSheet.create({
  buttonsRow: {
    flexDirection: 'row',
    paddingBlock: '32@s',
    gap: '32@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {paddingBlock: '10@vs', paddingInline: '20@s'},
  btnImgBg: {
    borderRadius: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },

  btnNotActiveText: {
    color: 'gray',
  },
  btnActiveText: {
    color: colors.secondary,
  },
});
