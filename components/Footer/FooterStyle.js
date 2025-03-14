import {ScaledSheet} from 'react-native-size-matters/extend';

export const styles = ScaledSheet.create({
  footerContainer: {
    height: '100@vs',
    zIndex: 11,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footer: {
    position: 'relative',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  footerItem: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerIcon: {
    width: '24@s',
    height: '24@vs',
  },
  footerLinkActive: {
    display: 'none',
    position: 'absolute',
    top: '50%',
    transform: [{translateY: '-50%'}, {translateX: '-50%'}, {scale: 1.8}],
    left: '50%',
    width: '60@s',
    height: '60@vs',
  },
  footerBackground: {
    zIndex: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
  ImageBackgroundActive: {display: 'flex'},
  iconActive: {
    transform: [{translateY: '-20@vs'}, {translateX: '-6@s'}],
    width: '28@s',
    height: '28@vs',
  },
  hidden: {
    position: 'absolute',
    height: '50@vs',
    bottom: 0,
    zIndex: 1,
    width: '100%',
    backgroundColor: '#363E51',
  },
});
