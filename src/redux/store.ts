import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { menuReducer } from "./reducers/ui/menu.reducer";

const rootReducer = combineReducers({
    menu: menuReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
