
import { createSlice } from "@reduxjs/toolkit";

export const detailSlice = createSlice({
    name: 'detail',
    initialState: {
        deal: {}
    },
    reducers: {
        addDeal: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }
    }
});

//Exportar acciones.

export const { addDeal } = detailSlice.actions;

export const dealData = (state) => state.detail;

export default detailSlice.reducer;