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
        <div>
            <h2>Options:</h2>
            <select value={inputMeasure} onChange={handleInputChange}>
                <option key='' value=''>Choose input type...</option>
                {content}
            </select>
            <input type="number" value={measureValue} onChange={handleValueChange} width={1}></input>
            <select value={outputMeasure} onChange={handleOutputChange}>
            <option key='' value=''>Choose output type...</option>
                {content}
            </select>
        </div>
    )
}

export default InputCard;