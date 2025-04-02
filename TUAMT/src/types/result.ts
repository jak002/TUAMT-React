export interface MeasurementResult {
    amount: number;
    inputMeasure: Measure;
    outputMeasure: Measure;
}

export interface Measure {
    name: string;
    namePlural: string;
    type: string;
    value: number;
}

export interface ConvertTerms {
    input: string;
    output: string;
    amountToConvert: number;
}