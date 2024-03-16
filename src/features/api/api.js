import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../utils/constance";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    tagTypes: ['Products', 'Product', 'Categories', 'Category'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products',
            providesTags: ['Products']
        }),
        getProductsByCategory: builder.query({
            query: (id) => `/categories/${id}/products`,
            providesTags: ['Products']
        }),
        getProduct: builder.query({
            query: (id) => `/products/${id}`,
            providesTags: ['Product']
        }),
        getCategories: builder.query({
            query: () => '/categories',
            providesTags: ['Categories']
        }),
        getCategory: builder.query({
            query: (id) => `/categories/${id}`,
            providesTags: ['Category']
        }),
        createProduct: builder.mutation({
            query: (body) => ({
                url: '/products',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Products']
        }),
        updateProduct: builder.mutation({
            query: (body) => ({
                url: '/products',
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Products']
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Products']
        }),
        createCategory: builder.mutation({
            query: (body) => ({
                url: '/categories',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Categories']
        }),
        updateCategory: builder.mutation({
            query: (body) => ({
                url: '/categories',
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Categories']
        }),
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `/categories/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Categories']
        })
    })
})

export const {
    useGetProductsQuery,
    useGetProductsByCategoryQuery,
    useGetProductQuery,
    useGetCategoriesQuery,
    useGetCategoryQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
    useCreateCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation
} = api;
