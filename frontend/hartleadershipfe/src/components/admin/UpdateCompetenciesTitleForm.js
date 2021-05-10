import React from "react";
import { useInput } from '../hooks/InputHook';
import {editQuote} from "../../actions/authActions";
import axios from 'axios';

export function UpdateCompetenciesTitleForm(props) {
    const { value:newQuote, bind:bindNewQuote, reset:resetNewQuote } = useInput('');   
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Quote ${newQuote}`);
        try {
          const req = {
            title: newQuote,
            competency_id: props.competency_id
          }
axios.put('/competency/edit/title', req).then(resp => {
    props.updateVar(newQuote);
});
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