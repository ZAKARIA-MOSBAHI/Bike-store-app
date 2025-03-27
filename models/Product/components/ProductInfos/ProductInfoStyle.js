import {ScaledSheet} from 'react-native-size-matters/extend';
export const styles = ScaledSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#323B4F',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  containerFooter: {
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
});
