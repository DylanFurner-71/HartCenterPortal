import React from "react";
import { useInput } from '../hooks/InputHook';
import {editQuote} from "../../actions/authActions";
import axios from 'axios';

export function AddVideosForm(props) {
    const { value:newQuote, bind:bindNewQuote, reset:resetNewQuote } = useInput(''); 
    const { value:newDesc, bind:bindNewDesc, reset:resetNewDesc } = useInput('');     
    const { value:newTitle, bind:bindNewTitle, reset:resetNewTitle } = useInput('');     

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
            competency_id: props.competency_id,
            title: newTitle,
          }
axios.post('/competency/insert/video', req).then(resp => {
    props.updateVar();
});
        }  catch (e){
          console.log(e);
      }
      resetNewDesc();
      resetNewQuote();
      resetNewTitle();
    }
    return (
      <form onSubmit={handleSubmit}>
         <label>
          The title of the video/quiz that you want students to see:
          <input type="text" {...bindNewTitle}
          placeholder={`Place the Youtube link here.`}/>
        </label>
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
        <p> Please keep in mind that the video will only link correctly if it comes from Youtube. </p>
        <input type="submit" value="Submit" />
      </form>
    );
  }