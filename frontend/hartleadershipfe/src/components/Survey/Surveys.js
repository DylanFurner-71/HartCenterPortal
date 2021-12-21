import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import {determineQuestion, postStudentSurveyResponse, postStudentsResponse} from "../../actions/surveyActions";
let globalArr = [];
const Surveys = (props) => {
    const { user } = useSelector(state => state.auth.user);
    const smu_id = user.smu_id;
        let history = useHistory();
        function handleClick(resp) {
          history.push("/survey/response/", {state: resp});
        }
Survey.Survey.cssType = "bootstrap";
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
    if(props.questions == 'a'){
        return null;
    } else{
    let json = { title: props.title ? props.title : "Leader Comparision", showProgressBar: "top", pages: [], completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"};    
    let pageHolder = {questions: []};
    for(const [index,value] of props.questions.entries()){
        value.gl = props.gl;
        value.bl = props.bl;
        globalArr.push(value)

        pageHolder.questions.push(determineQuestion(value, index))
        if(((index + 1) % 5) == 0){
            json.pages.push(pageHolder);
            pageHolder = {questions:[]};
        }
        }
    json.pages.push(pageHolder);
    var model = new Survey.Model(json);
    // model
    // .onValueChanged
    // .add(function (sender, options) {
    //     var mySurvey = sender;
    //     var questionName = options.name;
    //     var newValue = options.value;
    // });
    let inf = props.info
    if (props.competencyQuiz === false){
    model
    .onComplete
    .add(function (sender) {
        var mySurvey = sender;
        var surveyData = sender.data;
        try {
            postStudentSurveyResponse(surveyData, smu_id, props.survey_id, props.gl, props.bl).then(res => {
            postStudentsResponse(res, smu_id)
        })
    } catch(e){
        console.log(e);
    }       
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