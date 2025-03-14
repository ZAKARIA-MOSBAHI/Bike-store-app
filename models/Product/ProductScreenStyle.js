import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors} from '../../styles/colors';
const {height, width} = Dimensions.get('window');
export const styles = ScaledSheet.create({
  container: {flex: 1},
  headerTextStyle: {marginInline: 'auto'},
  productInfos: {
    position: 'relative',
    backgroundColor: colors.background,
    flex: 1,
  },
  backgroundContainer: {
    height: height,
    width: width,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  backgroundImg: {flex: 1},
  productImageContainer: {
    position: 'absolute',
    left: '50%',
    width: width,
    height: height,
  },
});
