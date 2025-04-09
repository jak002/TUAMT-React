import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { measureApi } from "./apis/measureApi";
import { sendConversionReducer, changeInput, changeOutput, changeValue} from "./sendConversionSlice";

export const store = configureStore({
    reducer: {
        [measureApi.reducerPath]: measureApi.reducer,
        sendConversion: sendConversionReducer
    },
    middleware : (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(measureApi.middleware)
    },
});
setupListeners(store.dispatch);

export {useFetchMeasureListQuery, useFetchConversionQuery } from "./apis/measureApi"
export {changeInput, changeOutput, changeValue};