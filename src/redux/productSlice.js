import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";


const initialState = {
    items: [],
    status: 'start',
    error:null
};

export const fetchApi =createAsyncThunk('products/fetchApi',async ()=>{
    const responve =await axios.get('https://66a0a2837053166bcabc1470.mockapi.io/product');
    return responve.data;
})

const productsSlice = createSlice({
    name: "product",
    initialState,

    reducers: { },
    extraReducers:(biulder)=>{
        biulder
        .addCase(fetchApi.pending, (state)=>{
            state.status='loading';
        })
        .addCase(fetchApi.fulfilled, (state,action)=>{
            state.status='succeed';
            state.items=action.payload;
        })
        .addCase(fetchApi.rejected, (state,action)=>{
            state.status='faild';
            state.error=action.error.message;
        })
    }

})


export default productsSlice.reducer;