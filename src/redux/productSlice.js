import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const product =
    localStorage.getItem("product") !== null
        ? JSON.parse(localStorage.getItem("product"))
        : [];
const initialState = {
    items:product,
    status: 'start',
    error: null,
    totalPage: 30
};
const url = 'https://66a0a2837053166bcabc1470.mockapi.io/product';
export const fetchApi = createAsyncThunk('products/fetchApi', async ({page,item,sortOrder,range}) => {
    const responve = await axios.get(`${url}?page=${page}&&limit=${item}`);
    const data = responve.data;
    const filteredData = data.filter(product =>
        product.price >= range[0] && product.price <= range[1]
      );
    const sortedData = filteredData.sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.price - b.price;
        } else if  (sortOrder === 'desc') {
            return b.price - a.price;
        }else{
            return 0;
        }
       
    });

    return sortedData;
    
});

export const prodMaleL = createAsyncThunk('products/prodMaleL', async () => {
    const responve = await axios.get(url);
    return responve.data;
});

const productsSlice = createSlice({
    name: "product",
    initialState,

    reducers: {},
    extraReducers: (biulder) => {
        biulder
            .addCase(fetchApi.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchApi.fulfilled, (state, action) => {
                state.status = 'succeed';
                state.items = action.payload;
                localStorage.setItem("product", JSON.stringify(  state.items))
            })
            .addCase(prodMaleL.fulfilled, (state, action) => {
                state.status = 'succeed';
                state.items = action.payload;
            })

            .addCase(fetchApi.rejected, (state, action) => {
                state.status = 'faild';
                state.error = action.error.message;
            })
    }

})


export default productsSlice.reducer;