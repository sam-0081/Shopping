import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../utils/constance";

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (_, thunkAPI) => {
        const res = await axios(`${BASE_URL}/products`);
        return res.data;
    }
)


const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        filtered: [],
        // related: [],
        isLoading: false,
    },
    reducers: {
        filterByPriceRange: (state, {payload}) => {
            const [min, max] = payload;
            state.filtered = state.list.filter(({price}) => price >= min && price <= max)

        },
        // getRelatedProducts: (state, action) => {
        //     const list = state.list.filter(({category: {id}}) => id === action.payload)
        //     state.related = shuffle(list);
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(getProducts.fulfilled, (state, {payload}) => {
            state.list = payload
        });
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false
        });
    }
});

export default productsSlice.reducer;
