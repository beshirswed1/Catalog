import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    isOpen: false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1
                });
            }
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },

        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);

            if (item) {
                item.quantity = quantity;

                // Remove item if quantity is 0
                if (quantity <= 0) {
                    state.items = state.items.filter(item => item.id !== id);
                }
            }
        },

        clearCart: (state) => {
            state.items = [];
        },

        toggleCart: (state) => {
            state.isOpen = !state.isOpen;
        },

        openCart: (state) => {
            state.isOpen = true;
        },

        closeCart: (state) => {
            state.isOpen = false;
        }
    }
});

// Actions
export const {
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartIsOpen = (state) => state.cart.isOpen;
export const selectCartCount = (state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotal = (state) =>
    state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);

export default cartSlice.reducer;
