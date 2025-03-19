import {create} from 'zustand';

export const useAppStore = create(set => ({
  cart: [],
  bag: {
    subtotal: 0,
    deliveryFee: 0,
    discount: 0,
    total: 0,
  },
  addToCart: payload =>
    set(state => {
      console.log('payload price : ', payload.price);
      const isAlreadyInCart = state.cart.find(item => item.id === payload.id);
      if (!isAlreadyInCart) {
        return {
          cart: [...state.cart, {...payload, quantity: 1}],
          bag: {
            ...state.bag,
            total: Math.round(state.bag.total + payload.price),
            subtotal: Math.round(state.bag.subtotal + payload.price),
          },
        };
      } else {
        return {
          cart: state.cart.map(cartItem =>
            cartItem.id === payload.id
              ? {...cartItem, quantity: cartItem.quantity + 1}
              : cartItem,
          ),
          bag: {
            ...state.bag,
            total: Math.round(state.bag.total + payload.price),
            subtotal: Math.round(state.bag.subtotal + payload.price),
          },
        };
      }
    }),
  incrementQuantity: id => {
    set(state => {
      const product = state.cart.find(item => item.id === id);
      return {
        cart: state.cart.map(item =>
          item.id === id ? {...item, quantity: item.quantity + 1} : item,
        ),
        bag: {
          ...state.bag,
          total: Math.round(state.bag.total + product.price),
          subtotal: Math.round(state.bag.subtotal + product.price),
        },
      };
    });
  },
  decrementQuantity: id =>
    set(state => {
      const product = state.cart.find(item => item.id === id);
      return {
        cart: state.cart
          .map(item =>
            item.id === id ? {...item, quantity: item.quantity - 1} : item,
          )
          .filter(item => item.quantity > 0),
        bag: {
          ...state.bag,
          total: state.bag.total - product.price,
          subtotal: state.bag.subtotal - product.price,
        },
      };
    }),
  removeItem: id =>
    set(state => ({cart: state.cart.filter(item => item.id !== id)})),
}));
