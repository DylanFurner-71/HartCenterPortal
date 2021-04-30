import { useInput } from '../hooks/InputHook';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';

export function AddContactCardButton(props) {
    const { value:newName, bind:bindNewName, reset:resetNewName } = useInput('');   
    const { value:newEmail, bind:bindNewEmail, reset:resetNewEmail } = useInput('');    
    const { value:newjobTitle, bind:bindNewJobTitle, reset:resetNewJobTitle } = useInput('');  
    const { value:newPhoneNumber, bind: bindNewPhoneNumber, reset: resetNewPhoneNumber} = useInput('');
    function resetNewQuote(){
        resetNewName();
        resetNewEmail();
        resetNewPhoneNumber();
        resetNewJobTitle();
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Quote ${newjobTitle}`);
        try {
          const req = {
            name: newName,
            email: newEmail,
            phoneNumber: newPhoneNumber,
            jobTitle: newjobTitle,
          }
axios.post('/contact/contactCard/add/', req).then(resp => {
    console.log(resp)
})
        }  catch (e){
          console.log(e);
      }
      resetNewQuote();
    }
    return (
      <form onSubmit={handleSubmit}>
               <label>
          Contact Name:
          <input type="text" {...bindNewName}
          placeholder={`The name of this new contact`}/>
        </label>
        <label>
        Email:
          <input type="text" {...bindNewEmail}
          placeholder={"The email of this contact"}/>
        </label>
        <label>
        Job Title:
          <input type="text" {...bindNewJobTitle}
          placeholder={'The job title of this person'}/>
        </label>
        <label>
        Phone number:
          <input type="text" {...bindNewPhoneNumber}
          placeholder={'This person\'s phone number'}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }