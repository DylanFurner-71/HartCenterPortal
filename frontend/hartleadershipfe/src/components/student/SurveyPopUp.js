import React, { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom'
import { Modal} from 'react-bootstrap'
import { useInput } from '../hooks/InputHook'
import Surveys from "../Surveys"
import Loading from "../Loading";
import axios from 'axios';
import {HartAPIPrefix} from '../../prefixes/hart';
import {EditQuizPopUp} from "../admin/EditQuizPopUp";
import {DeleteQuestionForm} from "../admin/DeleteQuestionForm"
const SurveyPopUp = props => {
    const {show, closeModal, good, bad} = props;
    const [badd, setBad] = useState(false)
    const [goodd, setGood] = useState(false)
    const { value:newTitle, bind:bindNewTitle, reset:resetNewTitle } = useInput('');     
    const handleSubmit = (evt) => {
        evt.preventDefault();
        good(newTitle)
        resetNewTitle();
        setGood(true)
    }
    const handleSubmit1 = (evt) => {
        evt.preventDefault();
        bad(newTitle)
        resetNewTitle();
        setBad(true)
        closeModal();
    }
    return (
        <div>

                     <div>
                    {show ?         <Modal
            {...props}
            centered onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                       Starting Off
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className ="mx-auto">
                    {!badd && !goodd && 
                    <div>
                    <form onSubmit={handleSubmit}>
                    <label>
                    Please enter the name of a good leader you know here:
                     <input type="text" {...bindNewTitle}
                     placeholder={`Please enter the name of a good leader you know here`}/>
                   </label>
                   <input type="submit" value="Submit" />
                 </form>
                 </div>
                    }
                    {!badd && goodd && <div>
                        <form onSubmit={handleSubmit1}>
                    <label>
                    Please enter the name of a bad leader you know here:
                     <input type="text" {...bindNewTitle}
                     placeholder={`Please enter the name of a bad leader you know here`}/>
                   </label>
                   <input type="submit" value="Submit" />
                 </form>
                 </div>}
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={closeModal}> Close </button>
                </Modal.Body>
            </Modal> : null }
                </div>

     
          
        </div>

    )

}

export default SurveyPopUp