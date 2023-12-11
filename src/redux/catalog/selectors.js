import { createSelector } from "@reduxjs/toolkit";


export const selectAdverts = state => state.adverts.items;

export const selectFavouriteAdverts = state => state.favourites.items;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectError = state => state.adverts.error;

export const selectFilters = state => state.filters;

export const selectIsModalOpen = (state) => state.modal.isOpen;

export const selectCurrentPage = (state) => state.adverts.currentPage;


export const selectVisibleAdverts = createSelector(
    [selectAdverts, selectFilters], (adverts, filters) => {
        return adverts.filter(advert => advert.make.toLowerCase().includes(filters.brand.toLowerCase()))
})