import React from "react";
import { useInput } from '../hooks/InputHook';
import {editQuote} from "../../actions/authActions";
import axios from 'axios';
import {HartAPIPrefix} from '../../prefixes/hart';
import {DeleteQuestionForm} from "./DeleteQuestionForm";
import EditMultipleChoice from "./questions/EditMultipleChoice"
export function EditQuizPopUp(props) {  
    const pathtoroute = '/competency/video/quiz/' //probably change this to props and delete this component
    // props.updateVar(newQuote);
    // <UpdateCompetenciesQuoteForm init={competency.quote} competency_id={competency.competency_id} updateVar={setQuote}>

    return (
      <div>
        <EditMultipleChoice pathtoroute={pathtoroute} survey_id={props.id} />
      </div>
    );
  }