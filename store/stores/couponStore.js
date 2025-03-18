import {create} from 'zustand';

export const useCouponStore = create(set => ({
  coupons: [
    {
      name: 'bike',
      discount: '30%',
    },
  ],
  addDiscount: payload => {
    set(state => {
      return {
        ...state,
        bag: {
          ...state.bag,
          discount: payload.discountRate,
        },
      };
    });
  },
}));
