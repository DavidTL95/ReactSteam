
import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        findings: []
    },
    reducers: {
        addFindings: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        deleteFindings: (state, action) => {
            return{
                ...state,
                ...action.payload
            }
        }
    }
});

//Exportar las acciones.

export const { addFindings, deleteFindings } = searchSlice.actions;

export const searchData = (state) => state.search;

export default searchSlice.reducer;