import {createSlice} from "@reduxjs/toolkit";
import {api} from "../api/api";


const restoreAuthState = () => {

    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken && refreshToken) {
        return {
            accessToken,
            refreshToken,
            // Здесь вы можете восстановить данные пользователя из localStorage, если они были сохранены
        };
    }

    return null;
};

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        accessToken: null,
        refreshToken: null,
        user: null,
        cart: [],
        ...restoreAuthState(),
    },
    reducers: {
        setCredentials: (state, action) => {
            // const {accessToken, refreshToken, user} = action.payload;
            state.accessToken = action.payload.access_token;
            state.refreshToken = action.payload.refresh_token;
            state.user = action.payload.user;
            localStorage.setItem('accessToken', action.payload.access_token);
            localStorage.setItem('refreshToken', action.payload.refresh_token);
        },
        logOut: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
            state.user = null;
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        addToCart: (state, {payload}) => {
            if (state.cart.find((item) => item.id === payload.id)) {
                state.cart = state.cart.map((item) => {
                    if (item.id === payload.id) {
                        return {...item, quantity: payload.quantity || item.quantity + 1};
                    }
                    return item;
                });
                return;
            }
            state.cart.push({...payload, quantity: 1});
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },
        clearCart: (state) => {
            state.cart = [];
        },

    },
    extraReducers: (builder)=>{
        builder.addMatcher(api.endpoints.login.matchFulfilled, (state, {payload}) => {
            const {access_token, refresh_token} = payload;
            state.accessToken = access_token;
            state.refreshToken = refresh_token;
            localStorage.setItem('accessToken', access_token);
            localStorage.setItem('refreshToken', refresh_token);

        });
        builder.addMatcher(api.endpoints.profile.matchFulfilled, (state, {payload}) => {
            state.user = payload;
        });
        builder.addMatcher(api.endpoints.refreshToken.matchFulfilled, (state, {payload}) => {
            state.accessToken = payload.access_token;
            state.refreshToken = payload.refresh_token;
            localStorage.setItem('accessToken', payload.access_token);
            localStorage.setItem('refreshToken', payload.refresh_token);

        });

    }
});

export const
    {
    setCredentials,
    logOut,
    setUser,
    addToCart,
    removeFromCart,
    clearCart
} = authSlice.actions;

export default authSlice.reducer;

// export const selectIsAuthenticated = (state) => !!state.auth.accessToken;
export const selectIsAuthenticated = (state) => state && state.auth ? !!state.auth.accessToken : false;