import React, { useEffect, useState, useRef } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
 
 
let globalArr = [];
const Surveys = (props) => {
    const postStudentsResponse = async() => (studentHolder) => {     
        try {
            const req = studentHolder;
              axios
              .post(`hartBE/v1/student/${user.info.smu_id}`, req)
              .then(resp => {
              console.log(resp, 'studentHolder')
      })
          }  catch (e){
            console.log(e);
        }
    }
    const postStudentSurveyResponse = async() => (responseHolder) => { 
    try {
        const req = responseHolder;
          axios
          .post(`hartBE/v1/survey/${user.info.smu_id}`, req)
          .then(resp => {
          handleClick(resp)
  })
      }  catch (e){
        console.log(e);
      }
    }
 
     const { user } = useSelector(state => state.auth.user)
    

       let history = useHistory();
       function handleClick(resp) {
         history.push("/survey/response/", {state: resp});
       }
 
   Survey.Survey.cssType = "bootstrap";
   function determineQuestion(value){
       if(value.type == 0){
           return{
               name: value.name.replace(' ', ''),
               type: "text",
                   title: value.title,
                   inputType: value.input,
                   isRequired: true,
                   autoComplete: value.auto
               };
           }   else if(value.type == 1){
                   return { type: "matrix", name: value.name.replace(' ', ''), title: value.title,
                   isRequired: false,
                       columns: [
                           // { value: 1, text: "1" },
                        //    { value: 2, text: "2" },
                        //    { value: 3, text: "3" },
                           { value: 4, text: "4" }],
                       rows: [
                           //{ value: value.choice1, text: props.gl }, //need to add this to the database to make it work for all of the questions,
                           { value: "You", text: "You" },
                          // { value: value.choice3, text: props.bl }
                        ],
                   };
               }  else if(value.type == 2){
                   var questionTest =
                       {
                           type: "radiogroup",
                           name: value.name.replace(' ', ''),
                           title: value.title,
                           isRequired: true,
                           colCount: 4,
                           choices: [value.choice1, value.choice2, value.choice3, value.choice4],
                           choicesOrder: value.choicesOrder,
                           correctAnswer: value.correctAnswer,
                       };
                //    for(const [indexInner,valueInner] of value.choices.entries()){
                //        questionTest.choices.push(valueInner);
                //    }
                   return questionTest
                 }  else if(value.type == 3){
                   return {
                   "type": "boolean",
                   name: value.name.replace(' ', ''),
                   "title": "Please answer the question",
                   "label": value.title,
                   "isRequired": true
               };
           }       // if (choice4 != null && choice4Text) {
           //     questionTest.rows.push({value: choice4Text})
           // } //soonn
  
   }
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
   if(props.questions == 'a'){
       return null;
   }
   else{
       //change completedHTML to something
   let json = { title: props.title ? props.title : "Leader Comparision", showProgressBar: "top", pages: [], completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"};   
   let pageHolder = {questions: []};
 
   for(const [index,value] of props.questions.entries()){
       globalArr.push(value)
       pageHolder.questions.push(determineQuestion(value, index))
       if(((index + 1) % 60) == 0){
           json.pages.push(pageHolder);
           pageHolder = {questions:[]};
       } else {

       }
       }
  
   json.pages.push(pageHolder);
   var model = new Survey.Model(json);
 
   model
   .onValueChanged
   .add(function (sender, options) {
       var mySurvey = sender;
       var questionName = options.name;
       var newValue = options.value;
   });
   let inf = props.info
   if (props.competencyQuiz === false){
   model
   .onComplete
   .add(function (sender) {
       //on complete we post the two survey responses to their destinnationn
       const mySurvey = sender;
       const SurveyData = sender.data;
       console.log(SurveyData, "surveyData")
       const map = sender.data
    //    const responsesMapped = [];
       

       const allResponses = Object.keys(map).map((key) => 
            map[key]
       )
        allResponses.forEach((e,i) => e.competency = props.questions[i]);
        allResponses.forEach((e,i) => e.title = props.questions[i].title);
        allResponses.forEach((e,i) => e.name = props.questions[i].name);

        const responsesMapped = {}   
    console.log("ALLRESPONSES: ", allResponses);
    let q;
    let n = 0;
    for (q=0; q < props.competencies.length; q++){
        console.log(props.competencies[q].competency);
        responsesMapped[props.competencies[q].competency] = allResponses.slice(n, n+5)
        if (q % 5 === 0)  {
            n = n +1;
        }
    }
       console.log("sa : ", responsesMapped['Self Awareness']);
       console.log(responsesMapped)
       const resultToString = allResponses.toString();
//maybe this is where we sum everything up? 
      
               //    //need to add this to the backend and I also ened to figure out how this maps to anythinng
               // axios
               // .get(`hartBE/v1/student/${user.smu_id}`)
               // .then(res => {
               //     studentHolder = res.data.response;
               // }).catch(err=> console.log(err))
               // postStudentsResponse(studentHolder)
               // postStudentSurveyResponse(responseHolder)
    
     
      
   }); 
} else {
   model
   .onComplete
   .add(function (sender, options) {
       var mySurvey = sender;
       var surveyData = sender.data;
       let localArr = globalArr.splice(0, globalArr.length/2)
       let correctedAnswers = {}
       localArr.forEach(item => {
           correctedAnswers[item.name] = item.correctAnswer;
       }       
       )
   globalArr = []
   })
}
   return (
       <div>
     <Survey.Survey model={model}/>
   </div>
   );
   }
 }
export default Surveys

