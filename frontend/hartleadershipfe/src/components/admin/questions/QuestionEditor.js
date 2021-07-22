import React from "react";
import { useInput } from '../../hooks/InputHook';
import {editQuote} from "../../../actions/authActions";
import axios from 'axios';
import {HartAPIPrefix} from '../../../prefixes/hart';
import {DeleteQuestionForm} from "../DeleteQuestionForm";
import EditMultipleChoice from "./EditMultipleChoice"
export function QuestionEditor(props) {
    function giveObj(){
        if (props.question.questionid == 0){
            return < > </> //open response enter text questions
        }
        if (props.question.questionid == 1){
            return < > </> //selection questiosn
        }
        if (props.question.questionid == 2){
            return < > </> //multiple choice questiosn
        }
    }
    return (
      <div>
      </div>
    );
  }
  export default QuestionEditor;