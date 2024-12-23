import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: localStorage.getItem('language') || 'tamil',  // Fetch saved language from localStorage
};

const LanguageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === 'tamil' ? 'english' : 'tamil';
      localStorage.setItem('language', state.language);  // Save language to localStorage
    },
  },
});

export const { toggleLanguage } = LanguageSlice.actions;
export default LanguageSlice.reducer;
