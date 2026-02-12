import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/features/cart/cartSlice';
import servicesReducer from '@/features/services/servicesSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        services: servicesReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});
