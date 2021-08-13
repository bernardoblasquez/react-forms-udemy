import useValidateFields from '../hooks/useValidateFields'
import { useCallback } from 'react';

const BasicForm = (props) => {

   const textFieldValidation = (value) => {
      return value.trim() !== ''
   }

   const emailFieldValidation = (value) => {
      const regex = /^\S+@\S+\.\S+$/;
      return regex.test(value) 
   }

   const {
      value: nameEnteredValue,
      isValid: nameInputIsValid,
      hasError: nameInputHasError,
      fieldChangeHandler: nameChangeHandler,
      fieldBlurHandler: nameBlurHandler,
      resetField: resetInputName
   } = useValidateFields(textFieldValidation);

   const {
      value: lastNameEnteredValue,
      isValid: lastNameInputIsValid,
      hasError: lastNameInputHasError,
      fieldChangeHandler: lastNameChangeHandler,
      fieldBlurHandler: lastNameBlurHandler,
      resetField: resetInputLastName
   } = useValidateFields(textFieldValidation);

   const {
      value: emailEnteredValue,
      isValid: emailInputIsValid,
      hasError: emailInputHasError,
      fieldChangeHandler: emailChangeHandler,
      fieldBlurHandler: emailBlurHandler,
      resetField: resetInputEmail
   } = useValidateFields(emailFieldValidation);

   let formIsValid = false;

   if (lastNameInputIsValid && nameInputIsValid && emailInputIsValid) {
      formIsValid = true
   }

   const submitFormHandler = (event) => {
      event.preventDefault()
      
      resetInputName();
      resetInputLastName();
      resetInputEmail();
   }

   const nameClasses = (
      nameInputHasError
      ?'form-control invalid'
      :'form-control' 
   )

   const lastNameClasses = (
      lastNameInputHasError
      ?'form-control invalid'
      :'form-control' 
   )

   const emailClasses = (
      emailInputHasError
      ?'form-control invalid'
      :'form-control' 
   )

   console.log(lastNameClasses)

   return (
      <form onSubmit={submitFormHandler}>
         <div className='control-group'>
            <div className={nameClasses}>
               <label htmlFor='name'>First Name</label>
               <input 
                  type='text' 
                  id='name'
                  value={nameEnteredValue}
                  onChange={nameChangeHandler}
                  onBlur={nameBlurHandler}
               />
            </div>

            <div className={lastNameClasses}>
               <label htmlFor='name'>Last Name</label>
               <input 
                  type='text' 
                  id='lastName' 
                  value={lastNameEnteredValue}
                  onChange={lastNameChangeHandler}
                  onBlur={lastNameBlurHandler} 
               />
            </div>
         </div>

         <div className={emailClasses}>
            <label htmlFor='name'>E-Mail Address</label>
            <input 
               type='text' 
               id='email' 
               value={emailEnteredValue}
               onChange={emailChangeHandler}
               onBlur={emailBlurHandler} 
            />
         </div>

         <div className='form-actions'>
            <button disabled={!formIsValid}>Submit</button>
         </div>
      </form>
   );
   };

export default BasicForm;
