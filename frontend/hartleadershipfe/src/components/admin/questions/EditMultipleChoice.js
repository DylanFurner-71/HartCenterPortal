import React from "react";
import { useInput } from '../../hooks/InputHook';
import {editQuote} from "../../../actions/authActions";
import axios from 'axios';
import {HartAPIPrefix} from '../../../prefixes/hart';
import {DeleteQuestionForm} from "../DeleteQuestionForm";
export function EditMultipleChoice(props) {
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
            type: 2,
            name: newTitle,
            title: newTitle,
            choicesOrder: "random",
            choices: [
               newQuote1, newQuote2, newQuote3, newQuote4
            ],
            correctAnswer: newQuote1,
            survey_id: props.survey_id,
            question_id: props.question_id
          }
axios.put(`${props.pathtoroute}`, req).then(resp => {
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
        hello
      <form onSubmit={handleSubmit}>
         <label>
          Please enter the question followed by a question mark
          <input type="text" {...bindNewTitle}
          placeholder={`question`}/>
        </label>
        <label>
          Please enter the correct answer choice
          <input type="text" {...bindNewQuote1}
          placeholder={`correct answer`}/>
        </label>
        <label>
          Please enter the second answer choice
          <input type="text" {...bindNewQuote2}
          placeholder={`Place the second option here.`}/>
        </label>
        <label>
          Please enter the third answer choice
          <input type="text" {...bindNewQuote3}
          placeholder={`Place the third option here.`}/>
        </label>
        <label>
          Please enter the fourth answer choice
          <input type="text" {...bindNewQuote4}
          placeholder={`Place the fourth option here.`}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
  export default EditMultipleChoice;