import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice';
import favoritesReducer from './favorites/favoritesSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        products: favoritesReducer
    },
})

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

