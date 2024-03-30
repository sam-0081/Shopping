import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../utils/constance";
import {logOut, setCredentials} from "../authSlice/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        console.log(token)
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

// Создаем экземпляр baseQueryWithReauth
const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    // Если получен статус 401 (Unauthorized), пытаемся обновить токен
    if (result.error && result.error.status === 401) {
        const refreshResult = await baseQuery('/auth/refresh-token', api, extraOptions);

        // Если обновление токена прошло успешно
        if (refreshResult.data) {
            const user = api.getState().auth.user;
            // Обновляем токен в хранилище состояния
            api.dispatch(setCredentials({ ...refreshResult.data, user }));

            // Повторяем исходный запрос с новым токеном
            result = await baseQuery(args, api, extraOptions);
        } else {
            // Если обновление токена не удалось, выходим из системы
            api.dispatch(logOut());
        }
    }

    return result;
};

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Products', 'Product', 'Categories', 'Category','Users','User'],
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
        }),
        getUser: builder.query({
            query: (id) => `users/${id}`
        }),
        getUsers: builder.query({
            query: () => `users`
        }),
        createUser: builder.mutation({
            query: (body) => ({
                url: `/users/`,
                method: 'POST',
                body
            })
        }),
        updateUser: builder.mutation({
            query: (body) => ({
                url: `users`,
                method: 'PUT',
                body
            })
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `users/${id}`,
                method: 'DELETE'
            })
        }),
        login: builder.mutation({
            query: (body) => ({
                url: `/auth/login`,
                method: 'POST',
                body: body
            })
        }),

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
    useDeleteCategoryMutation,
    useGetUserQuery,
    useGetUsersQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
    useLoginMutation
} = api;
