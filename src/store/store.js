import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/features/cart/cartSlice';
import servicesReducer from '@/features/services/servicesSlice';
import languageReducer from '@/features/language/languageSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        services: servicesReducer,
        language: languageReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});
