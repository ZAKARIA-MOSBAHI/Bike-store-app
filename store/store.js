import {create} from 'zustand';

export const useAppStore = create((set, get) => ({
  users: [
    {
      image: '',
      email: 'user@example.com',
      password: '123456789',
    },
    {image: '', email: 'user2@example.com', password: 'password2'},
  ],
  user: {
    image: '',
    email: null,
    password: null,
  },
  cart: [],
  bag: {
    subtotal: 0,
    deliveryFee: 0,
    discount: 0,
    total: 0,
  },
  error: null,
  isLoggedIn: false,

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
  resetError: async () => {
    set({error: null});
  },

  getUser: data => {
    const {users} = get();
    let userFound = false;
    let emailFound = false;
    const error = {};
    let userLogging = false;
    users.forEach(user => {
      if (user.email === data.email) {
        emailFound = true;
        if (user.password === data.password) {
          userFound = true;
          userLogging = user;
        } else {
          error.password = 'Password is incorrect';
        }
      }
    });

    if (!emailFound) {
      error.email = 'Email is not found';
    }

    if (userFound) {
      set({isLoggedIn: true});
      console.log('data ', data);
      set({user: userLogging});
    } else {
      set({error: error});
    }
  },

  addUser: data => {
    const {users} = get();
    if ((data?.email, data?.password)) {
      set({user: data, users: [...users, data]});
    } else {
      throw new Error('Email and password are required');
    }
  },
  resetUser: () => {
    set({
      user: {
        email: null,
        password: null,
      },
      isLoggedIn: false,
    });
  },
  setUser: (payload, property) => {
    const {users, user} = get();
    const userToSet = users.find(u => user.email === u.email);
    const newUsers = users.filter(u => u.email !== user.email);
    const newUser = {...userToSet, [property]: payload};
    set(state => ({...state, users: [...newUsers, newUser], user: newUser}));
  },
}));
