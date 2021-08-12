import { useState } from 'react';


const SimpleInput = (props) => {

   const regex = /^\S+@\S+\.\S+$/;

   const [enteredName, setEnteredName] = useState('');
   const [enteredNameWasTouched, setEnteredNameWasTouched] = useState(false);
   const enteredNameIsValid = enteredName.trim() !== '';
   const nameInputIsInvalid  = !enteredNameIsValid && enteredNameWasTouched;

   const [enteredEmail, setEnteredEmail] = useState('');
   const [enteredEmailWasTouched, setEnteredEmailWasTouched] = useState(false);
   const enteredEmailIsValid = regex.test(enteredEmail); // alreay verifies if it is empty or not
   const emailInputIsInvalid  = !enteredEmailIsValid && enteredEmailWasTouched;
   

   let formIsValid = false;

   if (enteredNameIsValid && enteredEmailIsValid){
      formIsValid = true;
   }
 
   const inputNameChangeHandler = event => {
      setEnteredName(event.target.value);
   }

   const inputEmailChangeHandler = event => {
      setEnteredEmail(event.target.value);
   }



   const inputNameBlurHandler = event => {
      setEnteredNameWasTouched(true)
   }

   const inputEmailBlurHandler = event => {
      setEnteredEmailWasTouched(true)
   }

   const formSubmitHandler = event => {
      event.preventDefault();

      setEnteredNameWasTouched(true);

      if (!enteredNameIsValid || !enteredEmailIsValid) {
         return;
      }

      console.log(enteredName);

      setEnteredName('');
      setEnteredNameWasTouched(false);

      setEnteredEmail('');
      setEnteredEmailWasTouched(false);
   }

   const nameInputClasses = nameInputIsInvalid 
      ? 'form-control invalid' 
      : 'form-control';

   const emailInputClasses = emailInputIsInvalid
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
               onChange={inputNameChangeHandler}  
               onBlur={inputNameBlurHandler}              
            />

            { nameInputIsInvalid && ( <p className="error-text">The field must not be empty</p> ) }
         </div>

         <div className={emailInputClasses}>
            <label htmlFor='name'>Your e-mail</label>
            <input 
               type='text' 
               id='email'
               value={enteredEmail}
               onChange={inputEmailChangeHandler}  
               onBlur={inputEmailBlurHandler}              
            />

            { emailInputIsInvalid  && ( <p className="error-text">The field must not be empty</p> ) }
         </div>

         <div className="form-actions">
            <button disabled={!formIsValid} >Submit</button> 
         </div>
      </form>
   );
};

export default SimpleInput;
