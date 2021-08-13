import { useState } from 'react';


const useValidateFields = (validationFieldsFunction) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [fieldTouched, setFieldTouched] = useState(false);

    const fieldIsValid = validationFieldsFunction(enteredValue); 
    const hasError = !fieldIsValid && fieldTouched;

    const fieldChangeHandler = (event) => {
        setEnteredValue(event.target.value)
    }

    const fieldBlurHandler = () => {
        setFieldTouched(true)
    }

    const resetField = () => {
        setEnteredValue('');
        setFieldTouched(false);
    }

    return {
        value: enteredValue,
        isValid: fieldIsValid,
        hasError: hasError,
        fieldChangeHandler,
        fieldBlurHandler,
        resetField
    }
}

export default useValidateFields;