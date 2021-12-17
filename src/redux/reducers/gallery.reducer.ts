import { createReducer } from "@reduxjs/toolkit";
import { setCategoryAction } from "../actions/gallery.action";

interface GalleryState {
    category: {
        current: number | null;
    };
}

const initialState = {
    category: {
        current: null,
    },
} as GalleryState;

export const galleryReducer = createReducer(initialState, (builder) => {
    builder.addCase(setCategoryAction, ({ category }, action) => {
        category.current = action.payload || null;
    });
});
