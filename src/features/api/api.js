import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_ROUTES, BASE_URL} from "../../utils/constance";
import {logOut, setCredentials} from "../authSlice/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,

    prepareHeaders: (headers, { getState }) => {
        const { auth } = getState();
        if (auth.accessToken) {
            headers.set('Authorization', `Bearer ${auth.accessToken}`);
            // console.log(headers.get('Authorization'))
        }

        return headers;
    },
});

const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        // Попытка обновить токен доступа с помощью токена обновления
        const refreshResult = await baseQuery('/auth/refresh-token', api, extraOptions);

        if (refreshResult.data) {
            const { user } = api.getState().auth.user;
            api.dispatch(setCredentials(refreshResult.data, user));

            // Повторить запрос с новым токеном доступа
            result = await baseQuery(args, api, extraOptions);
        } else {
            // Обработка ошибки обновления токена
            api.dispatch(logOut());
        }
    }

    return result;
};



// Создаем экземпляр baseQueryWithReauth
// const baseQueryWithReauth = async (args, api, extraOptions) => {
//     let result = await baseQuery(args, api, extraOptions);
//
//     // Если получен статус 401 (Unauthorized), пытаемся обновить токен
//     if (result.error && result.error.status === 401) {
//         const refreshResult = await baseQuery('/auth/refresh-token', api, extraOptions);
//
//         // Если обновление токена прошло успешно
//         if (refreshResult.data) {
//             const user = api.getState().auth.user;
//             // Обновляем токен в хранилище состояния
//             api.dispatch(setCredentials({ ...refreshResult.data, user }));
//
//             // Повторяем исходный запрос с новым токеном
//             result = await baseQuery(args, api, extraOptions);
//         } else {
//             // Если обновление токена не удалось, выходим из системы
//             api.dispatch(logOut());
//         }
//     }
//
//     return result;
// };

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithRefreshToken,
    tagTypes: ['Products', 'Product', 'Categories', 'Category','Users','User'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => API_ROUTES.PRODUCTS,
            providesTags: ['Products']
        }),
        getProductsByCategory: builder.query({
            query: (id) => API_ROUTES.PRODUCT_BY_CATEGORY(id),
            providesTags: ['Products']
        }),
        getProduct: builder.query({
            query: (id) => API_ROUTES.PRODUCT(id),
            providesTags: ['Product']
        }),
        getCategories: builder.query({
            query: () => API_ROUTES.CATEGORIES,
            providesTags: ['Categories']
        }),
        getCategory: builder.query({
            query: (id) => API_ROUTES.CATEGORY(id),
            providesTags: ['Category']
        }),
        createProduct: builder.mutation({
            query: (body) => ({
                url: API_ROUTES.PRODUCTS,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Products']
        }),
        updateProduct: builder.mutation({
            query: (body) => ({
                url: API_ROUTES.PRODUCTS,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Products']
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: API_ROUTES.PRODUCT(id),
                method: 'DELETE'
            }),
            invalidatesTags: ['Products']
        }),
        createCategory: builder.mutation({
            query: (body) => ({
                url: API_ROUTES.CATEGORIES,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Categories']
        }),
        updateCategory: builder.mutation({
            query: (body) => ({
                url: API_ROUTES.CATEGORIES,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Categories']
        }),
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: API_ROUTES.CATEGORY(id),
                method: 'DELETE'
            }),
            invalidatesTags: ['Categories']
        }),
        getUser: builder.query({
            query: (id) => API_ROUTES.USER(id),
        }),
        getUsers: builder.query({
            query: () => API_ROUTES.USERS,
        }),
        createUser: builder.mutation({
            query: (body) => ({
                url: API_ROUTES.USERS,
                method: 'POST',
                body
            })
        }),
        updateUser: builder.mutation({
            query: (body) => ({
                url: API_ROUTES.USERS,
                method: 'PUT',
                body
            })
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: API_ROUTES.USER(id),
                method: 'DELETE'
            })
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: API_ROUTES.LOGIN,
                method: 'POST',
                body: credentials,
            }),
        }),
        profile: builder.query({
            query: () => API_ROUTES.PROFILE,
            // refetchOnMountOrArgChange: true, // Всегда получать свежие данные профиля
            // skip: (state) => !state.refreshToken, // Пропускать запрос, если токена нет
        }),
        refreshToken: builder.mutation({
            query: (refreshToken) => ({
                url: API_ROUTES.REFRESH_TOKEN,
                method: 'POST',
                body: { refreshToken },
            }),
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
    useLoginMutation,
    useProfileQuery,
    useRefreshTokenMutation
} = api;
