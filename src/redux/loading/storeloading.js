import { configureStore } from "@reduxjs/toolkit";

import loadingReducer from "./loadingSlide";

export const storeLoad = configureStore({
    reducer: {
    loading: loadingReducer,
    },
});
