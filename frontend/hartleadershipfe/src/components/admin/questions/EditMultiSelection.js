import React from "react";
import { useInput } from '../../hooks/InputHook';
import {editQuote} from "../../../actions/authActions";
import axios from 'axios';
import {HartAPIPrefix} from '../../../prefixes/hart';
import {DeleteQuestionForm} from "../DeleteQuestionForm";
export function EditMultiSelection(props) {
    const { value:newQuote1, bind:bindNewQuote1, reset:resetNewQuote1 } = useInput(''); 
    const { value:newQuote2, bind:bindNewQuote2, reset:resetNewQuote2 } = useInput(''); 
    const { value:newQuote3, bind:bindNewQuote3, reset:resetNewQuote3 } = useInput(''); 
    const { value:newQuote4, bind:bindNewQuote4, reset:resetNewQuote4 } = useInput(''); 
    const { value:newTitle, bind:bindNewTitle, reset:resetNewTitle } = useInput(props.question.title);     
    const pathtoroute = `/survey/edit/${props.question.survey_id}/ms`

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Question ${newTitle}`);
        //here is where we structure the multi selection style question
        //abstract to functionn
        try {
          const req = {
            type: 1,
            name: newTitle === "" || newTitle === props.question.title ? props.question.title : newTitle.split(" ").join(""),
            title: newTitle === "" || newTitle === props.question.title ?  props.question.title : newTitle ,
            choicesOrder: "random",
            choice1: "GL",
            choice2: "You",
            choice3: "BL",
            survey_id: props.survey_id
          }
axios.put(`${pathtoroute}`, req).then(resp => {
//find somethinng to do inn here
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
  export default EditMultiSelection;