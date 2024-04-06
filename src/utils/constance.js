export const BASE_URL = 'https://api.escuelajs.co/api/v1';
// export const BASE_URL = 'https://fakestoreapi.com';

export const API_ROUTES = {
    PRODUCTS: '/products',
    PRODUCT_BY_CATEGORY: (id) => `/categories/${id}/products`,
    PRODUCT: (id) => `/products/${id}`,
    CATEGORIES: '/categories',
    CATEGORY: (id) => `/categories/${id}`,
    USERS: 'users',
    USER: (id) => `users/${id}`,
    LOGIN: '/auth/login',
    PROFILE: '/auth/profile',
    REFRESH_TOKEN: '/auth/refresh-token',
};