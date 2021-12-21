import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {HartAPIPrefix, HartURL} from '../../prefixes/hart';
import axios from 'axios';
import {Row, Container, Col} from "react-bootstrap/";
import EditMultipleChoice from "./questions/EditMultipleChoice";
import QuestionEditor from "./questions/QuestionEditor";
import QuizPopUp from "../student/QuizPopUp";
import {deleteQuestion} from "../../actions/surveyActions";
const SurveyCard = (props) => {
  const { user } = useSelector(state => state.auth.user);
  const [isStudent, setIsStudent] = useState(true);
  const [question, setSurvey] = useState({})
  const survey_id =props.survey_id
  const [modalShow, setModalShow] = useState(false)
  const closeModal = () => setModalShow(false);
  const openModal = () => setModalShow(true)
      useEffect(() => {
  if (!user.isStudent === true){
    setIsStudent(false);
  }
}, [])
// function deleteQuestion(survey_id, questionid) {
//   return new Promise((resolve, reject) => {
//       axios.delete(`${HartAPIPrefix}/survey/${questionid}/${survey_id}`)
//           .then(resp => resolve(resp.data))
//           .catch(err => console.log(err.response));
//   })
// } 
function showchoices(question){
if (question.type == 2) {
    return <div>
                <p>Correct Answer:  {question.correctAnswer}</p>
                <p>Choice 2:  {question.choice2}</p>
                <p>Choice 3:  {question.choice3}</p>
                <p>Choice 4:  {question.choice4}</p>


    </div>
} else if (question.type == 1){
    return <div> 
    <p>Options for students to select: </p> 
    <p>choice 1: {question.choice1}</p>
    <p>choice 2: {question.choice2}</p>
    <p>choice 3: {question.choice3}</p>
    </div>
}
}
function mapquestion() {
    return (
            <div>
                <p>Question #{props.questionid+1}</p>
                <p>Question Category: {props.survey.category}</p>
                <p>Question Title: (this is the question the student is asked) {props.survey.title} </p>
                <p>Question Type:</p> {props.survey.type}
                <div>{showchoices(props.survey)}</div>
            </div>
    )
}
useEffect(() => {
  if (!user.isStudent === true){
    setIsStudent(false);
  }
})
return (
  <div>
    <Container className="competency border border-dark rounded" style={{zIndex:'950'}}>
           <Row>
    <Col>
    <p>{mapquestion()}</p>
    {isStudent ? (
<></>
    ) : (
<div>
      <button onClick={() => deleteQuestion(survey_id, props.survey.question_id)} className="btn btn-outline-secondary">
      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>
  </button>
  <div>
    <p> Use the form below to enter new questions.</p>
    <QuestionEditor question={props.survey} survey_id={props.survey.survey_id} question_id={props.survey.question_id}/>
  </div>
  </div>

    )}

              </Col>
              </Row>
    </Container>
    </div>
);
};

export default SurveyCard;