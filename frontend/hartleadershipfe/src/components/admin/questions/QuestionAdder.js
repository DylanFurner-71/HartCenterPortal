import React, { useEffect, useState, useRef } from 'react';
import { useInput } from '../../hooks/InputHook';
import {editQuote} from "../../../actions/authActions";
import axios from 'axios';
import AddMultipleChoice from "./AddMultipleChoice"
import AddFreeResponse from "./AddFreeResponse"
import AddMultiSelection from "./AddMultiSelection"
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
export const QuestionAdder = (props) => {
    const [select, setSelected] = useState(false)
    const [choice, setChoice] = useState(-1)
    const handleSelect=(e)=>{
        setChoice(e)
        setSelected((true))
      }
    function giveObj(){
        // console.log("EDITOR:", props)
        if (choice == 0){
            return <AddFreeResponse pathtoroute={`/survey/edit/${props.survey_id}/fr`} survey_id={props.survey_id} />  
        }
        if (choice == 1){
            return <AddMultiSelection pathtoroute={`/survey/edit/${props.survey_id}/ms`} survey_id={props.survey_id} question={props.question} />  
        }
        if (choice ==2){

            return <AddMultipleChoice  pathtoroute={`/survey/edit/${props.survey_id}/mc`} survey_id={props.survey_id}/>           //multiple choice questiosn
        }//desperately need to pass updateVar format to change all of these screenns
    }
    if (select === false){
    return(
            <div>
<p> Please select a question type to add</p>
<DropdownButton
      alignRight
      title="Question type to add"
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
    
        >
              <Dropdown.Item eventKey={0}>Short Answer</Dropdown.Item>
              <Dropdown.Item eventKey={1}>Multiple Select</Dropdown.Item>
              <Dropdown.Item eventKey={2}>Multiple Choice</Dropdown.Item>
              <Dropdown.Divider />
      </DropdownButton>
            </div>
    )
    } else {
  
    const t=giveObj()
    return (
        <div         className='container justify-content-center align-items-center h-100'
        >        
<p>Here is where the dropdown select will go</p>
            {t}
            <DropdownButton
      alignRight
      title="Question type to add"
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
    
        >
              <Dropdown.Item eventKey={0}>Short Answer</Dropdown.Item>
              <Dropdown.Item eventKey={1}>Multiple Select</Dropdown.Item>
              <Dropdown.Item eventKey={2}>Multiple Choice</Dropdown.Item>
              <Dropdown.Divider />
      </DropdownButton>
        </div>
    
    );
  }
}
  export default QuestionAdder;