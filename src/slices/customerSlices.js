import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const customerSlice = createSlice({
    name: 'customer',
    initialState: initialState, // Key value
    // If there are any changes in the customer data on the store page, it triggers the corresponding functions in this reducer.
    reducers: {
        // make input changes
        addCustomer(state, action) {
            state.push(action.payload)
        }
    }

})