import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    devTools:true,
    // The reducer is used in conjunction with useState to handle functions within Redux
    reducer: {
        customer: ""
    }
})