export const cartReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//  case "ADD_TO_CART":
//     return {
//        ...state,
//        cart: [...state.cart, { ...action.payload, qty: 1 }],
//     };
//  case "REMOVE_FROM_CART":
//     return {
//        ...state,
//        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
//     };