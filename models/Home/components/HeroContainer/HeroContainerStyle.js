import {
  moderateScale,
  scale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  container: {
    width: scale(350),
    height: verticalScale(240),
    marginInline: 'auto',
  },
  Banner: {
    width: scale(350),
    height: verticalScale(260),
  },
});
