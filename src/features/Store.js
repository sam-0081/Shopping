import React from 'react';
import {configureStore} from "@reduxjs/toolkit";
import categoriesSlice from "./categories/CategoriesSlice";

export const store =configureStore({
    reducer: {
        categories: categoriesSlice,
        // products: productsSlice,
        // user: userSlise,
        // [apiSlice.reducerPath]:apiSlice.reducer

    },
    devTools: true,
})