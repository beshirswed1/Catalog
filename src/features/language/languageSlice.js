import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
    name: 'language',
    initialState: {
        currentLang: 'ar', // Default language
    },
    reducers: {
        setLanguage: (state, action) => {
            state.currentLang = action.payload;
        },
    },
});

export const { setLanguage } = languageSlice.actions;

export const selectCurrentLang = (state) => state.language.currentLang;

export default languageSlice.reducer;
