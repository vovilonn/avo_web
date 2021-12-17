import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { galleryReducer } from "./reducers/gallery.reducer";
import { menuReducer } from "./reducers/ui/menu.reducer";

const rootReducer = combineReducers({
    menu: menuReducer,
    gallery: galleryReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
