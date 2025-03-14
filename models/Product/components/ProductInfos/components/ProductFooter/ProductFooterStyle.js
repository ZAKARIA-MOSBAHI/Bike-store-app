import {ScaledSheet} from 'react-native-size-matters/extend';

export const styles = ScaledSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '32@s',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: '#262E3D',
    width: '100%',
    paddingBlock: '32@vs',
    marginBlock: '40@vs',
    elevation: 100,
    borderWidth: 2,
    borderColor: '#29212125',
    shadowColor: '#1C222E',
  },
  modalOpen: {
    bottom: 0,
  },
  modalClose: {
    bottom: '-380@vs',
  },
});
