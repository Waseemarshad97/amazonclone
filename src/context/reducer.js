export const initialState = {
    user: null,
    cart: [],
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
            ...state,
            cart: [...state.cart, action.item]
        }
        case 'REMOVE_FROM_CART':
            let newCart = [...state.cart];
            const index = state.cart.indexOf(action.item);
            newCart.splice(index);
            return {
                ...state,
                cart: newCart,
            }
        default:
            return state;
    }
}
export default reducer;