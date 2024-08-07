import { createSlice } from "@reduxjs/toolkit"



const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],

    },

    reducers: {
        addCart: (state, action) => {

            
            const itemInCart = state.cart.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity+=action.payload.quantity;
            } else {
                state.cart.push({ ...action.payload, quantity: action.payload.quantity });
             
            }
            
        },
        deleteCart: (state, action) => {
            state.item = state.item.filter(item => item.id !== action.payload);

        },
        clearCart: (state) => {
            state.item = [];
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--;
            }
        },

    }

})

export const { addCart, deleteCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;