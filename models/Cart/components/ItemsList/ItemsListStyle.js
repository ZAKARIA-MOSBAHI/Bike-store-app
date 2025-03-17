import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters/extend';
const {height} = Dimensions.get('screen');
export const styles = ScaledSheet.create({
  cartItemContainer: {flex: 1, marginTop: '70@vs', marginBottom: height * 0.5},
});
