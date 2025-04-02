import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MeasurementResult, Measure, ConvertTerms} from "../../types/result";
import { store } from '..';

const measureApi = createApi({
    reducerPath: 'convert',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5076/api/Measurements/'
    }),
    endpoints(builder) {
        return {
            fetchMeasureList: builder.query<string[],string>({
                query: (selectedType) => {
                    return {
                        url: 'type/' + selectedType,
                        method: 'GET',
                    }
                }
            }),
            fetchConversion: builder.query<MeasurementResult, ConvertTerms>({
                query: (convertInput) => {
                    return {
                        url: 'convert',
                        headers: {
                            'input': convertInput.input,
                            'output': convertInput.output,
                            'amount': convertInput.amountToConvert.toString()
                        },
                        method: 'GET',
                    };
                }
            }),
        };
    },
});

export const { useFetchMeasureListQuery, useFetchConversionQuery } = measureApi;
export {measureApi};
export type RootState = ReturnType<typeof store.getState>