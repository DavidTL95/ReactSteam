
import { configureStore } from "@reduxjs/toolkit";

import detailSlice from "../pages/detailSlice";
import searchSlice from "../pages/searchSlice";
import userSlice from "../pages/userSlice"

import storage from "redux-persist/lib/storage"

import { combineReducers } from "redux"
import { persistReducer } from "redux-persist";

import thunk from "redux-thunk"
import favSlice from "../pages/favSlice";

const reducers = combineReducers({
    search: searchSlice,
    detail: detailSlice,
    user: userSlice,
    fav: favSlice,
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