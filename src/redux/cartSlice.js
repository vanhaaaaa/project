import { createSlice } from "@reduxjs/toolkit"

const items =
    localStorage.getItem("cart") !== null
        ? JSON.parse(localStorage.getItem("cart"))
        : [];

const totalAmount =
    localStorage.getItem("totalAmount") !== null
        ? JSON.parse(localStorage.getItem("totalAmount"))
        : 0;

const totalQuantity =
    localStorage.getItem("totalQuantity") !== null
        ? JSON.parse(localStorage.getItem("totalQuantity"))
        : 0;



const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: items,
        totalAmount: totalAmount,
        totalQuantity: totalQuantity,
    },

    reducers: {
        addCart: (state, action) => {


            const itemInCart = state.cart.find((item) => item.id === action.payload.id);




            if (itemInCart) {
                itemInCart.quantity += action.payload.quantity;
                itemInCart.totalPrice = Number(action.payload.price) + Number(itemInCart.totalPrice);
                state.totalQuantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: action.payload.quantity, totalPrice: action.payload.price });
                state.totalQuantity += action.payload.quantity;
            }
            localStorage.setItem("cart", JSON.stringify(state.cart))

            state.totalAmount = state.cart.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),
                0
            );
            localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity))
            localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount))

        },
        deleteCart: (state, action) => {
            const existingItem = state.cart.find((item) => item.id === action.payload);
            const removeItem = state.cart.filter((item) => item.id !== action.payload);
            state.totalQuantity = state.totalQuantity - existingItem.quantity;
            state.cart = removeItem;

            localStorage.setItem("cart", JSON.stringify(state.cart))


            state.totalAmount = state.cart.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),
                0
            );
            localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity))
            localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount))

        },
        clearCart: (state) => {
            state.cart = [];
            localStorage.setItem("cart", JSON.stringify(state.cart))
            state.totalQuantity = 0;
            state.totalAmount = state.cart.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),
                0
            );
            localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity))
            localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount))
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
            state.totalQuantity++;
            localStorage.setItem("cart", JSON.stringify(state.cart))
            state.totalAmount = state.cart.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),
                0
            );
            localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity))
            localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount))
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                state.totalQuantity--;
                item.quantity--;
            }
            localStorage.setItem("cart", JSON.stringify(state.cart))
            localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity))
            state.totalAmount = state.cart.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),
                0
            );

            localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount))
        },

    }

})

export const { addCart, deleteCart, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;