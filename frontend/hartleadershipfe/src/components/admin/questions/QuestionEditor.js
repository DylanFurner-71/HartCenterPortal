import React from "react";
import { useInput } from '../../hooks/InputHook';
import {editQuote} from "../../../actions/authActions";
import axios from 'axios';
import EditMultipleChoice from "./EditMultipleChoice"
import EditFreeResponse from "./EditFreeResponse"
import EditMultiSelection from "./EditMultiSelection"
export const QuestionEditor = (props) => {
    function giveObj(){
        if (props.question.type == 0){
            return <EditFreeResponse pathtoroute={props.pathtoroute} survey_id={props.survey_id} />  
        }
        if (props.question.type == 1){
            return <EditMultiSelection question_id={props.question.question_id} pathtoroute={props.pathtoroute} survey_id={props.question.survey_id} question={props.question} />  
        }
        if (props.question.type ==2){
            return <EditMultipleChoice question_id={props.question.question_id} pathtoroute={props.pathtoroute} survey_id={props.question.survey_id} />           //multiple choice questiosn
        }
    }
    const t=giveObj()
    return (
        <div>          {t}
        
        </div>

    );
  }
  export default QuestionEditor;