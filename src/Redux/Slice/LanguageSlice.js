import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    language: "tamil", 
};

const LanguageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        toggleLanguage: (state) => {
            state.language = state.language === "tamil" ? "english" : "tamil";
        },
    },
});

export const { toggleLanguage } = LanguageSlice.actions;
export default LanguageSlice.reducer;