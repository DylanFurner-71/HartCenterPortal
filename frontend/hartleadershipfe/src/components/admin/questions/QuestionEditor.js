import React from "react";
import { useInput } from '../../hooks/InputHook';
import {editQuote} from "../../../actions/authActions";
import axios from 'axios';
import EditMultipleChoice from "./EditMultipleChoice"
import EditFreeResponse from "./EditFreeResponse"
import EditMultiSelection from "./EditMultiSelection"
export const QuestionEditor = (props) => {
    function giveObj(){
        console.log("EDITOR:", props)
        if (props.question.type == 0){
            return <EditFreeResponse question={props.question} survey_id={props.survey_id} />  
        }
        if (props.question.type == 1){
            return <EditMultiSelection question={props.question}  question_id={props.question.question_id} survey_id={props.question.survey_id} question={props.question} />  
        }
        if (props.question.type ==2){

            return <EditMultipleChoice question={props.question} question_id={props.question.question_id} pathtoroute={props.pathtoroute} survey_id={props.question.survey_id} />           //multiple choice questiosn
        }//desperately need to pass updateVar format to change all of these screenns
    }
    const t=giveObj()
    return (
        <div>          {t}
        
        </div>

    );
  }
  export default QuestionEditor;