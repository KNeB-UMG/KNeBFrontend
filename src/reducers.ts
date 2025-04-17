import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './store/user/userSlice';


const rootReducer = combineReducers({
    user: userSlice.reducer,
});

export default rootReducer;
