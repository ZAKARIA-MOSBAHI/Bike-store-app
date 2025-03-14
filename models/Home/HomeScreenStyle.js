import {scale, ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
  },
  viewstyle: {
    marginTop: scale(70),
    zIndex: 1,
    flexGrow: 1,
  },
});
