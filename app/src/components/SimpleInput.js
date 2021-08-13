import useInput from '../hooks/useInput';


const SimpleInput = (props) => {

   const {
      value: enteredName,
      isValid: enteredNameIsValid,
      hasError: nameInputHasError,
      valueChangeHandler: nameChangeHandler,
      inputBlurHandler: nameInputBlurHandler,
      reset: resetNameInput
   } = useInput( value => value.trim() !== '');


   const {
      value: enteredEmail,
      isValid: enteredEmailIsValid,
      hasError: emailInputHasError,
      valueChangeHandler: emailChangeHandler,
      inputBlurHandler: emailInputBlurHandler,
      reset: resetEmailInput
   } = useInput( value => { 
         const regex = /^\S+@\S+\.\S+$/;
         return regex.test(value) 
   });
   

   let formIsValid = false;

   if (enteredNameIsValid && enteredEmailIsValid){
      formIsValid = true;
   }

   const formSubmitHandler = event => {
      event.preventDefault();

      if (!enteredNameIsValid || !enteredEmailIsValid) {
         return;
      }

      console.log(enteredName);

      resetNameInput();
      resetEmailInput();
   }

   const nameInputClasses = nameInputHasError
      ? 'form-control invalid' 
      : 'form-control';

   const emailInputClasses = emailInputHasError
      ? 'form-control invalid' 
      : 'form-control';   

   return (
      <form  onSubmit={formSubmitHandler}>

         <div className={nameInputClasses}>
            <label htmlFor='name'>Your Name</label>
            <input 
               type='text' 
               id='name'
               value={enteredName}
               onChange={nameChangeHandler}  
               onBlur={nameInputBlurHandler}              
            />

            { nameInputHasError && ( <p className="error-text">The field must not be empty</p> ) }
         </div>

         <div className={emailInputClasses}>
            <label htmlFor='name'>Your e-mail</label>
            <input 
               type='text' 
               id='email'
               value={enteredEmail}
               onChange={emailChangeHandler}  
               onBlur={emailInputBlurHandler}              
            />

            { emailInputHasError  && ( <p className="error-text">The field must not be empty</p> ) }
         </div>

         <div className="form-actions">
            <button disabled={!formIsValid} >Submit</button> 
         </div>
      </form>
   );
};

export default SimpleInput;
