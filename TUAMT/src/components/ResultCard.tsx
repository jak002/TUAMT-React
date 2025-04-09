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
        if (data?.amount === 1) {
            outputName = data?.outputMeasure.name
        } else {
            outputName = data?.outputMeasure.namePlural
        }
        content = <div><h2>Output:</h2><h2 className=" bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">{amountToConvert} {inputName} {isOrAre} approximately the {data?.inputMeasure.type} of {data?.amount} {outputName}</h2></div>
    }

    //if(inputFilled) {
    //    content = <p>Oh hey looks like you're all set for sending off stuff</p>
    //} else {
    //    content = <p>please fill out stuff before sending this off</p>
    //}
return (

    <>
    
        {content}
    
    </>

)
}
export default ResultCard