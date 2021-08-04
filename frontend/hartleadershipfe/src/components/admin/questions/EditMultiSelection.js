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
    //make parent component pass survey categories as a separate prop
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Question ${newTitle}`);
        //here is where we structure the multi selection style question
        //abstract to functionn
        const newName = newTitle.split(" ").join("")
        const newCategory = newQuote4.split(" ").join("")
        try {
          const req = {
            type: 1,
            name: newName,
            title: newTitle === "" || newTitle === props.question.title ?  props.question.title : newTitle,
            choicesOrder: "random",
            choice1: "GL",
            choice2: "You",
            choice3: "BL",
            survey_id: props.survey_id,
            question_id: props.question.question_id,
            category: newQuote4 == "" || props.question.category === newCategory ? props.question.category : newCategory,
          }
axios.put(`${pathtoroute}`, req).then(resp => {

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
      <div style={{display: 'flex'}}>
        <p> Answer choices are defaulted to "Good Leader, User, and Bad Leader</p>
      <form onSubmit={handleSubmit} className="col">
         <label>
          Please enter the question
          <input type="text" {...bindNewTitle}
          placeholder={`question`}/>
        </label>
        <label>
          Please enter the Category map this to a dropdown select
          <input type="text" {...bindNewQuote4}
          placeholder={props.question.category}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
  export default EditMultiSelection;