import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { measureApi } from "./apis/measureApi";

export const store = configureStore({
    reducer: {
        [measureApi.reducerPath]: measureApi.reducer
    },
    middleware : (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(measureApi.middleware)
    },
});
console.log(store.getState());
setupListeners(store.dispatch);

export {useFetchMeasureListQuery, useFetchConversionQuery } from "./apis/measureApi"