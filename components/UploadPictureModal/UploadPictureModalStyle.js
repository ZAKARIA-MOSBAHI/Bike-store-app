import {ScaledSheet} from 'react-native-size-matters/extend';
import {typography} from '../../styles/typography';
import {colors} from '../../styles/colors';

export const styles = ScaledSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    width: '80%',
    paddingVertical: '12@vs',
    borderRadius: 8,
  },
  modalHeading: {
    ...typography.h2,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginBottom: '16@vs',
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  action: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '8@vs',
    paddingHorizontal: '16@s',
    borderRadius: 12,
    backgroundColor: '#F6F6F6',
  },
  actionsText: {
    fontWeight: 'bold',
    color: '#ccc',
  },
  cancelBtn: {
    width: '80%',
    borderRadius: 12,
    paddingVertical: '8@vs',
    marginTop: '16@vs',
    alignSelf: 'center',
    backgroundColor: colors.primary,
  },
  textBtn: {
    textAlign: 'center',
    ...typography.p,
    color: '#fff',
  },
});
