import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        credentials: {}
    },
    reducers: {
        login: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        userout: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        remove: (state, action) => {
            return{
                ...state,
                credentials: action.payload
            }
        }
    }
});

export const { login, userout, remove } = userSlice.actions;
export const userData = (state) => state.user;
export default userSlice.reducer;