import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState, User } from './userTypes';

const initialState: UserState = {
    user: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        get(state, action: PayloadAction<User>) {
            state.user = action.payload;
        },
        update(state, action: PayloadAction<User>) {
            state.user = action.payload;
        },
        logout(state) {
            state.user = null;
        },
    },
});

