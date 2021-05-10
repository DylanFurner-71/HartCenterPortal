import React from "react";
import { useInput } from '../hooks/InputHook';
import {editQuote} from "../../actions/authActions";
import axios from 'axios';

export function UpdateCompetenciesDescriptionForm(props) {
    const { value:newQuote, bind:bindNewQuote, reset:resetNewQuote } = useInput('');    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Description ${newQuote}`);
        try {
          const req = {
            competency_desc: newQuote,
            competency_id: props.competency_id
          }
axios.put('/competency/edit/desc', req).then(resp => console.log(resp))
        }  catch (e){
          console.log(e);
      }
      props.updateVar(newQuote);
      resetNewQuote();
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>
          New Description:
          <input type="text" {...bindNewQuote}
          placeholder={`${props.init}`}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }