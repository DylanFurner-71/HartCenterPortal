import React from "react";
import { useInput } from '../hooks/InputHook';
import {editQuote} from "../../actions/authActions";
import axios from 'axios';

export function UpdateCompetenciesQuoteForm(props) {
    const { value:newQuote, bind:bindNewQuote, reset:resetNewQuote } = useInput('');    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Quote ${newQuote}`);
        try {
          const req = {
            quote: newQuote,
            competency_id: props.competency_id
          }
axios.put('/competency/edit/quote', req).then(resp => console.log(resp))
        }  catch (e){
          console.log(e);
      }
      resetNewQuote();
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>
          New Quote:
          <input type="text" {...bindNewQuote}
          placeholder={`${props.init}`}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }