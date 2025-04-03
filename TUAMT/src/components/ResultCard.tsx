import React from "react";
import { useSelector } from "react-redux";
import { useFetchConversionQuery } from "../store";
import { RootState } from "../store/apis/measureApi";
import { ConvertTerms } from "../types/result";




function ResultCard() {
    const input = useSelector<RootState, string>((state) => {
        return state.sendConversion.input;})
    
    const output = useSelector<RootState, string>((state) => {
        return state.sendConversion.output;})
    
    const amountToConvert = useSelector<RootState, number>((state) => {
        return state.sendConversion.value;})
        
    const conversionquery : ConvertTerms = {
        input: input,
        output: output,
        amountToConvert: amountToConvert
    }

    const inputFilled : boolean = (conversionquery.input !== '' && conversionquery.output !== '')
    const skip = !inputFilled

    const {data, error, isFetching, isUninitialized } = useFetchConversionQuery(conversionquery, { skip, },)

    let content;
    let inputName;
    let outputName;
    let isOrAre;
    if(isUninitialized){
        content = <></>
    } else if (isFetching){
        content = <p>Loading conversion...</p>
    } else if (error){
        content = <p>something went wrong.</p>
    } else {
        if(amountToConvert == 1) {
            inputName = data?.inputMeasure.name;
            isOrAre = 'is';
        } else {
            inputName = data?.inputMeasure.namePlural;
            isOrAre = 'are';
        }
        if (data?.amount! < 2 && data?.amount! > 0.99) {
            outputName = data?.outputMeasure.name
        } else {
            outputName = data?.outputMeasure.namePlural
        }
        content = <p>{amountToConvert} {inputName} {isOrAre} approximately {data?.amount.toFixed(1)} {outputName}</p>
    }

    //if(inputFilled) {
    //    content = <p>Oh hey looks like you're all set for sending off stuff</p>
    //} else {
    //    content = <p>please fill out stuff before sending this off</p>
    //}
return (

    <>
    <div>
        {content}
    </div>
    </>

)
}
export default ResultCard