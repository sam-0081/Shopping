import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../utils/constance";

export const getCategories = createAsyncThunk(
    'categories/getCategories',

    async (_, thunkAPI) => {
        const res = await axios(`${BASE_URL}/categories`);
        return res.data;

    }
)

const CategoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        list: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(getCategories.fulfilled, (state, {payload}) => {
            state.list = payload
        });
        builder.addCase(getCategories.rejected, (state) => {
            state.isLoading = false
        });
    }
});


export default CategoriesSlice.reducer;