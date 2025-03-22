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
    width: '80@s',
    height: '80@vs',
  },
  profileImage: {width: '100%', height: '100%', borderRadius: 100},
  userName: {color: 'white', ...typography.h2},
  userEmail: {color: colors.gray, ...typography.p},
});
