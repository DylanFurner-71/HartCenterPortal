import React, { useEffect, useState, useRef } from 'react';
import { Modal} from 'react-bootstrap'
import {useInput} from "../hooks/InputHook"
const SurveyInfoPopUp = props => {
    console.log(props);
    const {show, closemodal, good, bad} = props;
    const [badd, setBad1] = useState(false)
    const [goodd, setGood1] = useState(false)
    const { value:newTitle, bind:bindNewTitle, reset:resetNewTitle } = useInput('');     
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (newTitle.length > 0){
        good(newTitle)
        resetNewTitle();
        setGood1(true);
        }
    }
    const handleSubmit1 = (evt) => {
        evt.preventDefault();
        if (newTitle.length > 0){
            bad(newTitle)
            resetNewTitle();
            setBad1(true)
            closemodal();
        }
   
    }
    return (

                     <div>
                    {show ?         <Modal
                    show={show}>
                <Modal.Header >
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
                    {/* <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={closeModal}> Close </button> */}
                </Modal.Body>
            </Modal> : null }

     
          
        </div>
    )
                    }
export default SurveyInfoPopUp;