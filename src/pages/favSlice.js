import { createSlice } from "@reduxjs/toolkit";

export const FavSlice = createSlice({
    name: 'fav',
    initialState: {
        items: []
    },
    reducers: {
        add: (state, action) => {
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        },
        remove: (state, action) => {
            return{
                ...state,
                items: action.payload
            }
        }
    }
});

export const { add, remove } = FavSlice.actions;
export const favData = (state) => state.fav;
export default FavSlice.reducer;