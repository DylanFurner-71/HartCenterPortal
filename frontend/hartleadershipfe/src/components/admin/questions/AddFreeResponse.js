import React from "react";
import { useInput } from '../../hooks/InputHook';
import {editQuote} from "../../../actions/authActions";
import axios from 'axios';
import {HartAPIPrefix} from '../../../prefixes/hart';
import {DeleteQuestionForm} from "../DeleteQuestionForm";
export function AddFreeResponse(props) {
    const { value:newTitle, bind:bindNewTitle, reset:resetNewTitle } = useInput('');     

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Question ${newTitle}`);
        try {
          const req = {
            type: 0,
            name: newTitle,
            title: newTitle,
            isRequired: true,
            autoComplete: "text",
            input: "text",
            survey_id: props.survey_id
          }
axios.post(`${props.pathtoroute}`, req).then(resp => {
console.log("Edit mulitiple choice axios responsne: \n")
console.log(resp)
//probably add updateVar not sure yet
});
        
}  catch (e){
          console.log(e);
      }
      resetNewTitle();
    }

    return (
      <div>
      <form onSubmit={handleSubmit}>
         <label>
          Please enter the question followed by punctuation
          <input type="text" {...bindNewTitle}
          placeholder={`question`}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
  export default AddFreeResponse;