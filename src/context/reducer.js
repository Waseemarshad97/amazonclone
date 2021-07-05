export const initialState = {
    user: null,
    cart: [],
    orderbook: [],
    products: [],
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
        case 'SET_USER':
            return {
            ...state,
            user: action.user,
        }
        case 'CLEAR_CART':
            return {
            ...state,
            cart: [],
        }
        case 'SET_PRODUCTS':
            // console.log(state.products)
            return {
            ...state,
            products: [...state.products, action.item]
        }
        default:
            return state;
    }
}
export default reducer;