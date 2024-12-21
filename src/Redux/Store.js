import { configureStore } from '@reduxjs/toolkit';
// import languageReducer from './Slices/LanguageSlice';
import languageReducer from '../Redux/Slice/LanguageSlice'

const Store = configureStore({
    reducer: {
        language: languageReducer,
    },
});

export default Store;