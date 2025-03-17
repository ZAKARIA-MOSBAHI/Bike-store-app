import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors} from '../../../../styles/colors';
const {height} = Dimensions.get('screen');
export const styles = ScaledSheet.create({
  container: {
    marginBlock: '24@vs',
    width: '100%',
    height: height * 0.3,
  },
  title: {
    color: colors.gray,
    textAlign: 'center',
    marginBottom: '24@vs',
    marginTop: '12@vs',
  },
  infoContainer: {
    flexDirection: 'column',
    gap: '16@s',
  },
  totalContainer: {
    marginBlock: '12@vs',
  },
  row: {flexDirection: 'row', justifyContent: 'space-between'},
});
