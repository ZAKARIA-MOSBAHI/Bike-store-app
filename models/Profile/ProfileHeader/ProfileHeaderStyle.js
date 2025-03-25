import {ScaledSheet} from 'react-native-size-matters/extend';
import {typography} from '../../../styles/typography';
import {colors} from '../../../styles/colors';

export const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '24@s',
    paddingVertical: '20@vs',
    paddingHorizontal: '16@s',
  },
  subContainer: {
    position: 'relative',
    width: '80@s',
    height: '80@vs',
  },
  profileImage: {width: '100%', height: '100%', borderRadius: 100},
  cameraIcon: {
    position: 'absolute',
    backgroundColor: '#d3D3D3',
    bottom: -5,
    borderRadius: 100,
    padding: 4,
    right: -5,
  },
  userName: {color: 'white', ...typography.h2},
  userEmail: {color: colors.gray, ...typography.p},
});
