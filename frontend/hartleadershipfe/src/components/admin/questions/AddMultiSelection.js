import React from "react";
import { useInput } from '../../hooks/InputHook';
import {editQuote} from "../../../actions/authActions";
import axios from 'axios';
import {HartAPIPrefix} from '../../../prefixes/hart';
import {DeleteQuestionForm} from "../DeleteQuestionForm";
export function AddMultiSelection(props) {
    const { value:newQuote1, bind:bindNewQuote1, reset:resetNewQuote1 } = useInput(''); 
    const { value:newQuote2, bind:bindNewQuote2, reset:resetNewQuote2 } = useInput(''); 
    const { value:newQuote3, bind:bindNewQuote3, reset:resetNewQuote3 } = useInput(''); 
    const { value:newQuote4, bind:bindNewQuote4, reset:resetNewQuote4 } = useInput(''); 
    const { value:newTitle, bind:bindNewTitle, reset:resetNewTitle } = useInput('');     

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Question ${newTitle}`);
        try {
          const req = {
            type: 1,
            name: newTitle,
            title: newTitle,
            choicesOrder: "random",
            choice1: "GL",
            choice2: "You",
            choice3: "BL",
            survey_id: props.survey_id
          }
          
axios.post(`${props.pathtoroute}`, req).then(resp => {
console.log("Edit mulitiple choice axios responsne: \n")
console.log(resp)

});
        
}  catch (e){
          console.log(e);
      }
      resetNewQuote1();
      resetNewQuote2();
      resetNewQuote3();
      resetNewQuote4();
      resetNewTitle();
    }

    return (
      <div>
        <p> Answer choices are defaulted to "Good Leader, User, and Bad Leader</p>
      <form onSubmit={handleSubmit}>
         <label>
          Please enter the question
          <input type="text" {...bindNewTitle}
          placeholder={`question`}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
  export default AddMultiSelection;