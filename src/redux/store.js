import { configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./catalog/advertsSlice";
import { filtersReducer } from "./catalog/filtersSlice";

export const store = configureStore({
    reducer: {
        adverts: advertsReducer,
        filters: filtersReducer,
    }       
});