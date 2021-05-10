import React from "react";
import { useInput } from '../hooks/InputHook';
import {editQuote} from "../../actions/authActions";
import axios from 'axios';
import {HartAPIPrefix} from '../../prefixes/hart';

export function DeleteQuestionForm(props) {
    function deleteVideo(id){
        return new Promise((resolve, reject) => {
            axios.delete(`${HartAPIPrefix}/competency/video/question/${id}`)
                .then(resp =>     {            
                props.updateVar()
                resolve(resp.data)
                }
                )
                .catch(err => console.log(err.response));
        })
    }
    return (
          <div className="menu">
      {props.questions.map(vid =>{
                        return <div className="m-2">  <button onClick={deleteVideo(vid.question_id)}> Delete question named: {vid.title}</button></div>
                    })}          
        </div> 
    );
  }