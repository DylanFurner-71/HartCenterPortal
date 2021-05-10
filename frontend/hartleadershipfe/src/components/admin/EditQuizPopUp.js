import React from "react";
import { useInput } from '../hooks/InputHook';
import {editQuote} from "../../actions/authActions";
import axios from 'axios';
import {HartAPIPrefix} from '../../prefixes/hart';

export function EditQuizPopUp(props) {
    const { value:newQuote1, bind:bindNewQuote1, reset:resetNewQuote1 } = useInput(''); 
    const { value:newQuote2, bind:bindNewQuote2, reset:resetNewQuote2 } = useInput(''); 
    const { value:newQuote3, bind:bindNewQuote3, reset:resetNewQuote3 } = useInput(''); 
    const { value:newQuote4, bind:bindNewQuote4, reset:resetNewQuote4 } = useInput(''); 
    const { value:newTitle, bind:bindNewTitle, reset:resetNewTitle } = useInput('');     
    const handleDelete = (id) => {
        return new Promise((resolve, reject) => {
            axios.delete(`${HartAPIPrefix}/competency/video/question/${id}`)
                .then(resp =>     {            
                resolve(resp.data)
                }
                )
                .catch(err => console.log(err.response));
        })
    }

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
            survey_id: props.id
          }
axios.post('/competency/video/quiz/', req).then(resp => {
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
      <form>
      <div className="menu">
      {props.questions.map(vid =>{
                        return<div className="m-2">  <button onClick={handleDelete(vid.question_id)}> Delete question named: {vid.title}</button></div>
                    })}          
        </div>
      </form>
      </div>
    );
  }