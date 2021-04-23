import { useInput } from '../hooks/InputHook';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';

export function AddSurveyButton(props) {
    const { value:newTitle, bind:bindNewTitle, reset:resetNewTitle } = useInput('');   
    const { value:newDesc, bind:bindNewDesc, reset:resetNewDesc } = useInput('');    
    const { value:newLink, bind:bindNewLink, reset:resetNewLink } = useInput('');    
    function resetNewQuote(){
        resetNewTitle();
        resetNewDesc();
        resetNewLink();
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Quote ${newTitle}`);
        try {
          const req = {
            title: newTitle,
            desc: newDesc,
            link: newLink,
          }
axios.post('/other/survey', req).then(resp => {
    console.log(resp)
    props.updateVar();
})

        }  catch (e){
          console.log(e);
      }
      resetNewQuote();
    }
    return (
      <form onSubmit={handleSubmit}>
               <label>
          New Title:
          <input type="text" {...bindNewTitle}
          placeholder={`Survey Title`}/>
        </label>
        <label>
          New Description:
          <input type="text" {...bindNewDesc}
          placeholder={'an optional short description of the survey'}/>
        </label>
        <label>
          New URL to Website:
          <input type="text" {...bindNewLink}
          placeholder={'The url to the website containing the other survey'}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }