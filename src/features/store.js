import {configureStore} from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import {api} from "./api/api";
import authSlice from "./authSlice/authSlice";

export const store =configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
        auth: authSlice,

        [api.reducerPath]:api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    devTools: true,
})