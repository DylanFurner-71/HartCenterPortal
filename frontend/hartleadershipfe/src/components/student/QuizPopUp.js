import React, { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom'
import { Modal} from 'react-bootstrap'
import Surveys from "../Surveys"
import Loading from "../Loading";
import axios from 'axios';
import {HartAPIPrefix} from '../../prefixes/hart';
import {EditQuizPopUp} from "../admin/EditQuizPopUp";
import { EditMultipleChoice } from '../admin/questions/EditMultipleChoice';
const QuizPopUp = props => {
    const {show, closeModal} = props;
    function handleResult() {
        console.log('Results');
    }
    const pathtoroute = '/competency/video/quiz/' //probably change this to props and delete this component
    return (
        <div>

                     <div>
                    {show ?         <Modal
            {...props}
            centered onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Quiz Pop up test
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className ="mx-auto">
                <Surveys questions={props.questions.filter(item => item.survey_id === props.id)} handleResult = {handleResult} competencyQuiz={true} title={props.title}/>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={closeModal}> Close </button>
                    {props.isAdmin === true &&  
<div>
    <p> Use the form below to enter new questions. The students will see the questions in random order each time</p>
    <EditMultipleChoice id={props.id} questions={props.questions.filter(item => item.survey_id === props.id.toString())} pathtoroute={pathtoroute}/>
    </div>
    }
                </Modal.Body>
            </Modal> : null }
                </div>

     
          
        </div>

    )

}

export default QuizPopUp