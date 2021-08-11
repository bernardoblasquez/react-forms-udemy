import { useState } from 'react';


const SimpleInput = (props) => {

   const [enteredName, setEnteredName] = useState('');
   const [enteredNameWasTouched, setEnteredNameWasTouched] = useState(false);
   

   const enteredNameIsValid = enteredName.trim() !== '';
   const nameInputIsInvalid  = !enteredNameIsValid && enteredNameWasTouched;

   let formIsValid = false;

   if (enteredNameIsValid){
      formIsValid = true;
   }
 
   const inputNameChangeHandler = event => {
      setEnteredName(event.target.value);
   }

   const inputNameBlurHandler = event => {
      setEnteredNameWasTouched(true)
   }

   const formSubmitHandler = event => {
      event.preventDefault();

      setEnteredNameWasTouched(true);

      if (!enteredNameIsValid) {
         return;
      }

      console.log(enteredName);

      setEnteredName('');
      setEnteredNameWasTouched(false);
   }

   const nameInputClasses = nameInputIsInvalid 
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
         </div>

         <div className="form-actions">
            <button disabled={!formIsValid} >Submit</button> 
         </div>
      </form>
   );
};

export default SimpleInput;
