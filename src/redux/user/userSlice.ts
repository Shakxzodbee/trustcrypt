import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types";

const initialState: IUser = {
    email: null,
    token: null,
    id: null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.token = action.payload.token;
        },
        removeUser: (state) => {
            state.email = null;
            state.id = null;
            state.token = null;
        }
    }
})

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;