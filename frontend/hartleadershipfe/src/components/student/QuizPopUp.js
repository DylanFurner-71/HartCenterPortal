import React from 'react';
import {Link} from 'react-router-dom'
import { Modal} from 'react-bootstrap'

const QuizPopUp = props => {
    const {show, closeModal} = props;

    return (
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
                    <h2> Popup Quiz</h2>
                    <p> This will be a pop up quiz for competencies soon</p>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={closeModal}> Close </button>
                </Modal.Body>
            </Modal> : null }

     
          
        </div>

    )

}

export default QuizPopUp