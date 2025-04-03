import { createSlice } from "@reduxjs/toolkit";

const sendConversionSlice = createSlice({
    name: 'sendConversion',
    initialState: {
        input: '',
        output: '',
        value: 0
    },
    reducers:{
        changeInput(state, action){
            state.input = action.payload
        },
        changeOutput(state, action){
            state.output = action.payload
        },
        changeValue(statue, action){
            statue.value = action.payload
        }
    }
})

export const {changeInput, changeOutput, changeValue} = sendConversionSlice.actions;
export const sendConversionReducer = sendConversionSlice.reducer;