import { createSlice,  PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types";

interface FavoritesState {
    favorites: IProduct[]
}
const initialState: FavoritesState = {
    favorites: []
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<IProduct>) => {
            state.favorites = [...state.favorites.filter(({ id }) => action.payload.id !== id), action.payload];
        },
        deleteFavorite: (state, action: PayloadAction<string>) => {
            state.favorites = state.favorites.filter((favorite: IProduct) => favorite.id !== action.payload)
        },
        clearFavorites: (state) => {
            state.favorites = [];
        },
    }
})

export const { addFavorite, deleteFavorite, clearFavorites } = favoritesSlice.actions;


export default favoritesSlice.reducer;