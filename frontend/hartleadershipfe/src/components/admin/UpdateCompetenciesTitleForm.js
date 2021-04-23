import React from "react";
import { useInput } from '../hooks/InputHook';
import {editQuote} from "../../actions/authActions";
import axios from 'axios';

export function UpdateCompetenciesTitleForm(props) {
    const { value:newQuote, bind:bindNewQuote, reset:resetNewQuote } = useInput('');    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Quote ${newQuote}`);
        // submitNewQuote(newQuote, props.competency_id)
        //call a post to submit the new quote through the API!
        // resetNewQuote();
        try {
          const req = {
            quote: newQuote,
            competency_id: props.competency_id
          }
axios.put('/competency/edit/title', req).then(resp => console.log(resp))
        }  catch (e){
          console.log(e);
      }
      resetNewQuote();
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>
          New Title:
          <input type="text" {...bindNewQuote}
          placeholder={`${props.init}`}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }