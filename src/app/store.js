
import { configureStore } from "@reduxjs/toolkit";
import detailSlice from "../pages/detailSlice";

import storage from "redux-persist/lib/storage"
import { combineReducers } from "redux"
import { persistReducer } from "redux-persist";

import thunk from "redux-thunk"

const reducers = combineReducers({
    detail: detailSlice,
});

const persitConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persitConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});