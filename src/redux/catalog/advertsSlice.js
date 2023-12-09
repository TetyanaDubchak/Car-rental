import { createSlice } from "@reduxjs/toolkit";
import { getAdverts } from "./operations";

const advertsSlice = createSlice({
    name: 'adverts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAdverts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAdverts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(getAdverts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }

})

export const advertsReducer = advertsSlice.reducer;