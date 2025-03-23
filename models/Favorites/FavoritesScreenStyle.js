import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors} from '../../styles/colors';
import {typography} from '../../styles/typography';

export const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  title: {
    ...typography.h1,
    color: colors.secondary,
    paddingHorizontal: '20@s',
    paddingTop: '24@s',
  },
});
