import { createSlice } from "@reduxjs/toolkit";

// const filtersInitialState = '';

const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        brand: "",
    },
    reducers: {
        setFilter: {
            reducer(state, action) {
                state.brand = action.payload.toLowerCase()

            }
        }
    }
})

export const { setFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;