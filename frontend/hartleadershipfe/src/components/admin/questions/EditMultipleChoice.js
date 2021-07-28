import React from "react";
import { useInput } from '../../hooks/InputHook';
import {editQuote} from "../../../actions/authActions";
import axios from 'axios';
import {HartAPIPrefix} from '../../../prefixes/hart';
import {DeleteQuestionForm} from "../DeleteQuestionForm";
export function EditMultipleChoice(props) {
    const { value:newQuote1, bind:bindNewQuote1, reset:resetNewQuote1 } = useInput(props.question.choice1); 
    const { value:newQuote2, bind:bindNewQuote2, reset:resetNewQuote2 } = useInput(props.question.choice2); 
    const { value:newQuote3, bind:bindNewQuote3, reset:resetNewQuote3 } = useInput(props.question.choice3); 
    const { value:newQuote4, bind:bindNewQuote4, reset:resetNewQuote4 } = useInput(props.question.choice4); 
    const { value:newTitle, bind:bindNewTitle, reset:resetNewTitle } = useInput(props.question.title);     
    const pathtoroute = `/survey/edit/${props.question.survey_id}/mc`
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Question ${newQuote1}`);
        console.log(
          "new quote:", newQuote1
        )
        if (newQuote1 === null) {
          console.log("IT's nnull")
        }
        try {
          const req = {
            type: 2,
            name: newTitle === "" || newTitle === props.question.title ? props.question.title : newTitle.split(" ").join(""),
            title: newTitle === "" || newTitle === props.question.title ?  props.question.title : newTitle ,
            choicesOrder: "random",
            choices: [
               (newQuote1 === null || newQuote1 === props.question.choice1) ?  props.question.choice1 : newQuote1, newQuote2 === "" || newQuote2 === props.question.choice2 ? props.question.choice2 : newQuote2, newQuote3 === "" || newQuote3 === props.question.choice3 ? props.question.choice3 : newQuote3, newQuote4 === "" || newQuote4 === props.question.choice4 ? props.question.choice4 : newQuote4
            ],
            correctAnswer: newQuote1 === props.question.choice1 ? newQuote1 : props.question.choice1,
            survey_id: props.question.survey_id,
            question_id: props.question.question_id
          }
          console.log("WE are putting", req)
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