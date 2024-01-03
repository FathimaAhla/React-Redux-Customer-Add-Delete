import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './slices/customerSlices';

export const store = configureStore({
    devTools:true,
    // The reducer is used in conjunction with useState to handle functions within Redux
    reducer: {
        customer: ""
    }
})