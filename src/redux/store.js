import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import authReducer from '../features/auth/authSlice';




const store=configureStore({
    reducer:{
        products:productSlice,
        cart:cartSlice,
        auth: authReducer
    }
})

export default store