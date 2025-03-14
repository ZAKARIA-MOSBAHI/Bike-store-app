import {ScaledSheet} from 'react-native-size-matters/extend';

export const styles = ScaledSheet.create({
  listContentStyle: {
    justifyContent: 'space-between',
    paddingBottom: '100@vs',
  },
  listStyle: {paddingBlock: '12@vs', flex: 1},
  cardContainer: {
    flex: 1,
    width: '155@s',
    height: '256@s',
    margin: '10@s',
    paddingBlock: '32@s',
  },

  // TallCardRight: {
  //   transform: [
  //     {
  //       translateY: '-48@vs',
  //     },
  //   ],
  // },
  // TallCardLeft: {
  //   transform: [
  //     {
  //       translateY: '-18@vs',
  //     },
  //   ],
  // },

  // ShortCard: {
  //   width: '100%',
  //   height: '219@vs',
  //   resizeMode: 'stretch',
  // },

  // ShortCardRight: {
  //   transform: [
  //     {
  //       translateY: '-28@vs',
  //     },
  //   ],
  // },
  // ShortCardLeft: {
  //   transform: [
  //     {
  //       translateY: 0,
  //     },
  //   ],
  // },
});
