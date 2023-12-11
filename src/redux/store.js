import { configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./catalog/advertsSlice";
import { filtersReducer } from "./catalog/filtersSlice";
import { favouritesReducer } from "./catalog/favouritesSlice";
import { modalReducer } from "./catalog/modalSlice";
import { loadMoreReducer } from "./catalog/loadMore";

export const store = configureStore({
    reducer: {
        adverts: advertsReducer,
        filters: filtersReducer,
        favourites: favouritesReducer,
        modal: modalReducer,
        // loadMore: loadMoreReducer,
    }       
});