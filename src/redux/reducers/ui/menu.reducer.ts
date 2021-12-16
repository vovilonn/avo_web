import { createReducer } from "@reduxjs/toolkit";
import { toggleMenu } from "../../actions/menu.action";

interface MenuState {
    menuIsActive: boolean;
}

const initialState = { menuIsActive: false } as MenuState;

export const menuReducer = createReducer(initialState, (builder) => {
    builder.addCase(toggleMenu, (state, action) => {
        state.menuIsActive = action.payload;
    });
});
