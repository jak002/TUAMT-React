import { useSelector, useDispatch } from "react-redux";
import { useFetchMeasureListQuery, changeInput, changeOutput, changeValue } from "../store";
import { RootState } from "../store/apis/measureApi";

function InputCard() {
    const {data, error, isFetching } = useFetchMeasureListQuery('length');


    let content;
    if (isFetching) {
        content = <option>Fetching list...</option>
    } else if (error) {
        content = <option>Couldn't fetch list of measurements.</option>
    } else {
        content = data?.map((item) => {return <option key={item} value={item}>{item}</option>});
    }

    const dispatch = useDispatch();
    const inputMeasure = useSelector<RootState, string>((state) => {
        return state.sendConversion.input;
    })

    const outputMeasure = useSelector<RootState, string>((state) => {
        return state.sendConversion.output;
    })

    const measureValue = useSelector<RootState, number>((state) => {
        return state.sendConversion.value;
    })

    const handleInputChange = (event: { target: { value: any; }; }) => {
        if(event.target.value !== ''){
        dispatch(changeInput(event.target.value))
    }
    }

    const handleOutputChange = (event: { target: { value: any; }; }) => {
        if(event.target.value !== ''){
        dispatch(changeOutput(event.target.value))
    }
    }

    const handleValueChange = (event: { target: { value: any; }; }) => {
        if(event.target.value !== ''){
        dispatch(changeValue(event.target.value))
    }
    }


    return (
        <div className=" bg-white border-blue-800 border m-2 pt-0 shadow-blue-200 shadow p-3 rounded-2xl min-h-24 flex justify-center flex-col box-border">
            <div className="flex justify-center box-border">
                <div className="flex shrink items-start w-5/12 flex-col">
                <label className="text-xs text-blue-800 mx-1">Input:</label>
            <select value={inputMeasure} onChange={handleInputChange} className="text-blue-950 bg-blue-100 h-full  text-center border-blue-900 rounded-xl  text-sm block shrink w-full cursor-pointer">
                <option key='' value=''>Select...</option>
                {content}
            </select>
            </div>
            <div className="flex items-center box-border w-2/12 mx-1 flex-col">
            <label className="text-xs text-blue-800">Amount:</label>
            <input type="number" value={measureValue} onChange={handleValueChange} className="w-full bg-blue-100 max-w-9 text-xl text-center border-blue-900 text-blue-950 rounded-2xl px-1 pb-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"></input>
            </div>
            <div className="flex shrink w-5/12 flex-col items-start">
            <label className="text-xs text-blue-800 mx-1">Output:</label>
            <select value={outputMeasure} onChange={handleOutputChange} className="text-blue-950 bg-blue-100 h-full  text-center border-blue-900 rounded-xl text-sm block shrink w-full cursor-pointer">
            <option key='' value=''>Select...</option>
                {content}
            </select>
            </div>
            </div>
        </div>
    )
}

export default InputCard;