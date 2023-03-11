import { createContext, useReducer } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, productToRemove) => {
  //find the cartItem to remove:
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  //check if quantity is 1, if it is, remove that item from the cart:
  if(existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
  }

  //if not quantity 1, return cartItem with adjusted quantity
  return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
}

export const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== productToClear.id)
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: ()=> {},
  clearItemFromCart:()=>{},
  cartCount:0,
  cartTotal:0,
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount:0,
  cartTotal:0,
};

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
}

const cartReducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state, 
        ...payload,
      };      
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload
      };    
    default:
      throw new Error(`unhandled typ of ${type} in cartReducer`);
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const {isCartOpen, cartItems, cartCount, cartTotal} = state;

  const updateCartItemReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, cartItem)=> total + cartItem.quantity,0)
    const newCartTotal = newCartItems.reduce((total, cartItem)=> total + cartItem.quantity * cartItem.price, 0)
    dispatch({
      type:CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      }
    });
  };

  const addItemToCart = (productToAdd) => {
    const newCartITems = addCartItem(cartItems, productToAdd);
    updateCartItemReducer(newCartITems);
  }

  const removeItemFromCart = (productToRemove) => {
    const newCartITems = removeCartItem(cartItems, productToRemove);
    updateCartItemReducer(newCartITems);
  }

  const clearItemFromCart = (productToClear) => {
    const newCartITems = clearCartItem(cartItems, productToClear);
    updateCartItemReducer(newCartITems);
  }

  const setIsCartOpen = (isOpen) => {
    dispatch({
      type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
      payload: isOpen
    });
  }

  const value = {
    isCartOpen ,
    setIsCartOpen,
    cartItems,    
    cartCount,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
