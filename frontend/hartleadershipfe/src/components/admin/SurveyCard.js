import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {HartAPIPrefix, HartURL} from '../../prefixes/hart';
import axios from 'axios';
import {Row, Container, Col} from "react-bootstrap/";
import EditMultipleChoice from "./questions/EditMultipleChoice";
import QuestionEditor from "./questions/QuestionEditor";
const SurveyCard = (props) => {
  const { user } = useSelector(state => state.auth.user);
  const [isStudent, setIsStudent] = useState(true);
  const [question, setSurvey] = useState({})
  const survey_id =props.survey_id
      useEffect(() => {
  if (!user.isStudent === true){
    setIsStudent(false);
  }
}, [])
const pathtoroute = `/survey/edit/${survey_id}/${props.question.question_id}`
function determineQuestion(value){
console.log(value, "VALUE")
    if(value.type == 0){
        return{
            name: value['name'].replace(' ', ''),
            type: "text",
                title: value['title'],
                inputType: value['input'],
                isRequired: true,
                autoComplete: value['auto']
            };
        }   else if(value['type'] == 1){
                return { type: "matrix", name: value['name'].replace(' ', ''), title: value['title'],
                isRequired: true,
                    columns: [{ value: 1, text: "1" },
                        { value: 2, text: "2" },
                        { value: 3, text: "3" },
                        { value: 4, text: "4" }],
                    rows: [
                        { value: value.choice1, text: "Good Leader" }, //need to add this to the database to make it work for all of the questions,
                        { value: value.choice2, text: "You" },
                        { value: value.choice3, text: "Bad Leader" }]
                };
            }  else if(value['type'] == 2){
                var questionTest =
                    {
                        type: "radiogroup",
                        name: value['name'].replace(' ', ''),
                        title: value['title'],
                        isRequired: true,
                        colCount: 4,
                        choices: value['choices'],
                        choicesOrder: value['choicesOrder'],
                        correctAnswer: value['correctAnswer'],
                    };
                for(const [indexInner,valueInner] of value['choices'].entries()){
                    questionTest.choices.push(valueInner);
                }
                return questionTest
              }  else if(value['type'] == 3){
                return {
                "type": "boolean",
                name: value['name'].replace(' ', ''),
                "title": "Please answer the question",
                "label": value['title'],
                "isRequired": true
            };
        }       // if (choice4 != null && choice4Text) {
    }
function deleteQuestion(survey_id, questionid) {
  return new Promise((resolve, reject) => {
      axios.delete(`${HartAPIPrefix}/survey/${props.id}/${props.questionid}`)
          .then(resp => resolve(resp.data))
          .catch(err => console.log(err.response));
  })
} 
function showchoices(question){
if (question.type == 2) {
    return <div>
                <p>Correct Answer:  </p>
        {question.choices.map((q, index) => {
        return <p>Choice {index}: {q}</p>
        })}

    </div>

} else if (question.type == 1){

    return <div> <p>Options for students to select: </p> 
    <p>choice 1: {question.choice1}</p>
    <p>choice 2: {question.choice2}</p>
    <p>choice 3: {question.choice3}</p>

    </div>
}
}
function mapquestion() {
    // let question1 = determineQuestion(props.question)
    return (
            <div>
                <p>Question Type</p> {props.question.type}
                <p>Question name</p> {props.question.name}
                <p>Question Title (this is the question the student is asked) </p> {props.question.title}
                <p>Question Type</p> {props.question.type}
                <div>{showchoices(props.question)}</div>
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
    <p>question name: {question.name}</p>
    <p>{mapquestion()}</p>
    {isStudent ? (
<></>
    ) : (
<div>
      <button onClick={() => deleteQuestion(survey_id, question.name, props.questionid)} className="btn btn-outline-secondary">
      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>
  </button>
  <div>
    <p> Use the form below to enter new questions. The students will see the questions in random order each time</p>
    {/* <EditMultipleChoice id={props.id} questions={props.questions.filter(item => item.survey_id === props.id.toString())}/> */}
   <QuestionEditor props={question}/>
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