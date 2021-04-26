import React from "react";
import { useInput } from '../hooks/InputHook';
import {editQuote} from "../../actions/authActions";
import axios from 'axios';

export function AddVideosForm(props) {
    const { value:newQuote, bind:bindNewQuote, reset:resetNewQuote } = useInput(''); 
    const { value:newDesc, bind:bindNewDesc, reset:resetNewDesc } = useInput('');     
    
    function transformURL(urlOld){
        return `https://www.youtube.com/embed/${urlOld.split("v=")[1]}`;
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Video ${newQuote}`);
        try {
          const req = {
            video_desc: newDesc,
            video_link: transformURL(newQuote),
            competency_id: props.competency_id
          }
axios.post('/competency/insert/video', req).then(resp => {
    props.updateVar();
});
        }  catch (e){
          console.log(e);
      }
      resetNewDesc();
      resetNewQuote();
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>
          New Video Youtube URL:
          <input type="text" {...bindNewQuote}
          placeholder={`Place the Youtube link here.`}/>
        </label>
        <label>
          New Video Description:
          <input type="text" {...bindNewDesc}
          placeholder={`A description of the video`}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }