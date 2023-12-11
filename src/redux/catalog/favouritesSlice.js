import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: {
        items: [],
    },
    reducers: {
        addToFavourites (state, action) {
            state.items.push(action.payload);

        },
        removeFromFavourites(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        },
        
    }
})

export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;