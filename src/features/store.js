import {configureStore} from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import {api} from "./api/api";
import authSlice from "./authSlice/authSlice";
import {setupListeners} from "@reduxjs/toolkit/query";
import modalSlice from "./modal/modalSlice";

export const store =configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
        auth: authSlice,
        modal: modalSlice,

        [api.reducerPath]:api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    devTools: true,
})

setupListeners(store.dispatch);

