import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors} from '../../styles/colors';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
export const styles = ScaledSheet.create({
  header: {
    marginBlock: '10@s',
    height: '70@vs',
    zIndex: 2,
    backgroundColor: colors.background,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  child: {
    paddingInline: '12@s',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
  },
  inputStyle: {
    paddingLeft: '14@s',
    width: '80%',
    height: '100%',
    borderRadius: 10,
    paddingBlock: '12@s',
    borderWidth: 1,
    borderColor: colors.secondary,
    backgroundColor: colors.dark,
  },
});
