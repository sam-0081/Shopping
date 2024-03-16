import {configureStore} from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import {api} from "./api/api";

export const store =configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
        // user: userSlise,
        [api.reducerPath]:api.reducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    devTools: true,
})