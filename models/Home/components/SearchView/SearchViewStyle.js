import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors} from '../../../../styles/colors';

const {height} = Dimensions.get('window');
export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    height: height,
    backgroundColor: colors.background,
    position: 'absolute',
    top: 70,
    left: 0,
    right: 0,
    zIndex: 100,
  },
});
