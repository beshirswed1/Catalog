import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedTier: null, // 'basic' | 'standard' | 'premium'
    selectedService: null
};

const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        selectTier: (state, action) => {
            state.selectedTier = action.payload;
        },

        selectService: (state, action) => {
            state.selectedService = action.payload;
            state.selectedTier = action.payload?.id || null;
        },

        clearSelection: (state) => {
            state.selectedTier = null;
            state.selectedService = null;
        }
    }
});

// Actions
export const {
    selectTier,
    selectService,
    clearSelection
} = servicesSlice.actions;

// Selectors
export const selectSelectedTier = (state) => state.services.selectedTier;
export const selectSelectedService = (state) => state.services.selectedService;

export default servicesSlice.reducer;
