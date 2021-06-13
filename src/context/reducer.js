export const initialState = {
    user: null,
    cart: [],
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
            ...state,
            cart: [...state.cart, action.item]
        }
        case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex((item) => item.id === action.id);
            let newCart = [...state.cart];
            newCart.splice(index,1);
            return {
                ...state,
                cart: newCart,
            }
        default:
            return state;
    }
}
export default reducer;