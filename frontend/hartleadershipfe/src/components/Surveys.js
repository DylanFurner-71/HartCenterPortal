import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import {getSurvey} from "../actions/authActions";

import * as Survey from 'survey-react';
import 'survey-react/survey.css';

import 'bootstrap/dist/css/bootstrap.css'
import { conditionalExpression } from '@babel/types';
let globalArr = [];
class Surveys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: this.props.questions,
            showing: false,
            competencyQuiz: this.props.competencyQuiz ? true : false,
            title: this.props.title
              
        };
    }
  componentWillMount() {    
     
    Survey.Survey.cssType = "bootstrap";
    Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
    
    
  }
  componentDidMount(){
      
  }
  
  results = (model1) => {
    //console.log(model1.data);
    
    console.log("hi");
    //this.props.handleResult();
    }   

  render() {
    if(this.state.info == 'a'){
        console.log("here");
        return null;
    }
    else{
        var json = { title: this.props.title ? this.props.title : "Leader Comparision", showProgressBar: "top", pages: [], completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"};    
    var pageHolder = {questions:[]};
    for(const [index,value] of this.state.info.entries()){
        console.log(value);
        globalArr.push(value)
        if(value['type'] == 0){
            var questionTest =
                {
                    name: value['name'],
                    type: "text",
                    title: value['title'],
                    inputType: value['input'],
                    isRequired: true,
                    autoComplete: value['auto']
                };
            pageHolder.questions.push(questionTest);
        }
        else if(value['type'] == 1){
            var questionTest =
                { type: "matrix", name: value['name'], title: value['title'],
                    columns: [{ value: 1, text: "1" },
                        { value: 2, text: "2" },
                        { value: 3, text: "3" },
                        { value: 4, text: "4" }],
                    rows: [
                        { value: 'GL', text: "Good Leader" },
                        { value: 'BL', text: "Bad Leader" },
                        { value: 'user', text: "You" }]
                };
            
            pageHolder.questions.push(questionTest);
        }
        else if(value['type'] == 2){
            var questionTest =
                {
                    type: "radiogroup",
                    name: value['name'],
                    title: value['title'],
                    isRequired: true,
                    colCount: 4,
                    choices: [],
                    choicesOrder: value['choicesOrder'],
                    correctAnswer: value['correctAnswer'],
                };
            for(const [indexInner,valueInner] of this.state.info[index]['choices'].entries()){
                questionTest.choices.push(valueInner);
            }
            pageHolder.questions.push(questionTest);
        }
        else if(value['type'] == 3){
            var questionTest =
                {
                    "type": "boolean",
                    "name": value['name'],
                    "title": "Please answer the question",
                    "label": value['title'],
                    "isRequired": true
                };
            pageHolder.questions.push(questionTest);
        }
        if(((index + 1) % 5) == 0){
            json.pages.push(pageHolder);
            pageHolder = {questions:[]};
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
        console.log(options.question)
    });
    let inf = this.state.info
    if (this.state.competencyQuiz === false){
    model
    .onComplete
    .add(function (sender) {
        var mySurvey = sender;
        var surveyData = sender.data;
        console.log(mySurvey);
        console.log(surveyData);

        var selfAware = surveyData['Candid Self-Appraisal']['user'] + surveyData['Commits Wisely']['user'] + surveyData['Composed']['user'] + surveyData['Self Directed']['user'] + surveyData['Open to Feedback']['user'];
        var intentionalLearner = surveyData['Improves Performance']['user'] + surveyData['Wiling to Stretch']['user'] + surveyData['Reflective Learner']['user'] + surveyData['Grows from Adversity']['user'] + surveyData['Seeks Feedback']['user'];
        var communication = surveyData['Open to Feedback']['user'] + surveyData['Seeks Feedback']['user'] + surveyData['Transparent']['user'] + surveyData['Careful Listener']['user'] + surveyData['Gives Candid Feedback']['user'];
        var relationshipDevelopment = surveyData['Inclusive']['user'] + surveyData['Empathetic']['user'] + surveyData['Mends Fences']['user'] + surveyData['Seek Common Ground']['user'] + surveyData['Transparent']['user'];
        var diversityDifference = surveyData['Student of Culture']['user'] + surveyData['Values Differences']['user'] + surveyData['Cultural Perspective']['user'] + surveyData['Culturally Versatile']['user'] + surveyData['Multicultural Motivator']['user'];
        var engagingLeadership = surveyData['Inspires Commitment']['user'] + surveyData['Leverages Others\' Strengths']['user'] + surveyData['Influences Without Authority']['user'] + surveyData['Considerate']['user'] + surveyData['Careful Listener']['user'];
        var directiveLeadership = surveyData['Gives Directio ']['user'] + surveyData['Prioritizes Effectively']['user'] + surveyData['Clarifies Roles']['user'] + surveyData['Provides Guidance']['user'] + surveyData['Gives Candid Feedback']['user'];
        var championsProcesses = surveyData['Shares Leadership']['user'] + surveyData['Shares Responsibility']['user'] + surveyData['Believes in Others']['user'] + surveyData['Trusting of Others']['user'] + surveyData['Maintains Accountability']['user'];
        var problemSolving = surveyData['Defines Problems Effectively']['user'] + surveyData['Makes Informed Decisions']['user'] + surveyData['Logical Thinker']['user'] + surveyData['Uses Judgment']['user'] + surveyData['Decisive']['user'];
        var strategicPerspective = surveyData['Sees Big Picture']['user'] + surveyData['Systemic Awareness']['user'] + surveyData['Recognizes Trade-offs']['user'] + surveyData['Articulates Pros and Cons']['user'] + surveyData['Senses Leverage']['user'];
        var ethicsIntegrity = surveyData['Encourages Honesty']['user'] + surveyData['Trustworthy']['user'] + surveyData['Ethical Decision-maker']['user'] + surveyData['Ethically Aware']['user'] + surveyData['Principled']['user'];
        var innovativeSpirit = surveyData['Entrepeneurial']['user'] + surveyData['Thinks Different']['user'] + surveyData['Inventive']['user'] + surveyData['Generative']['user'] + surveyData['Maker Instinct']['user'];


        var allResponses = surveyData['Candid Self-Appraisal']['GL'].toString() + surveyData['Candid Self-Appraisal']['BL'].toString() + surveyData['Candid Self-Appraisal']['user'].toString()
        + surveyData['Commits Wisely']['GL'].toString() + surveyData['Commits Wisely']['BL'].toString() + surveyData['Commits Wisely']['user'].toString()
        + surveyData['Composed']['GL'].toString() + surveyData['Composed']['BL'].toString() + surveyData['Composed']['user'].toString()
        + surveyData['Self Directed']['GL'].toString() + surveyData['Self Directed']['BL'].toString() + surveyData['Self Directed']['user'].toString()
        + surveyData['Open to Feedback']['GL'].toString() + surveyData['Open to Feedback']['BL'].toString() + surveyData['Open to Feedback']['user'].toString()
        + surveyData['Improves Performance']['GL'].toString() + surveyData['Improves Performance']['BL'].toString() + surveyData['Improves Performance']['user'].toString()
        + surveyData['Wiling to Stretch']['GL'].toString() + surveyData['Wiling to Stretch']['BL'].toString() + surveyData['Wiling to Stretch']['user'].toString() 
        + surveyData['Reflective Learner']['GL'].toString() + surveyData['Reflective Learner']['BL'].toString() + surveyData['Reflective Learner']['user'].toString() 
        + surveyData['Grows from Adversity']['GL'].toString() + surveyData['Grows from Adversity']['BL'].toString() + surveyData['Grows from Adversity']['user'].toString() 
        + surveyData['Seeks Feedback']['GL'].toString() + surveyData['Seeks Feedback']['BL'].toString() + surveyData['Seeks Feedback']['user'].toString()
        + surveyData['Inclusive']['GL'].toString() + surveyData['Inclusive']['BL'].toString() + surveyData['Inclusive']['user'].toString()
        + surveyData['Empathetic']['GL'].toString() + surveyData['Empathetic']['BL'].toString() + surveyData['Empathetic']['user'].toString() 
        + surveyData['Mends Fences']['GL'].toString() + surveyData['Mends Fences']['BL'].toString() + surveyData['Mends Fences']['user'].toString() 
        + surveyData['Seek Common Ground']['GL'].toString() + surveyData['Seek Common Ground']['BL'].toString()+ surveyData['Seek Common Ground']['user'].toString()
        + surveyData['Transparent']['GL'].toString() + surveyData['Transparent']['BL'].toString() + surveyData['Transparent']['user'].toString()
        + surveyData['Student of Culture']['GL'].toString() + surveyData['Student of Culture']['BL'].toString() + surveyData['Student of Culture']['user'].toString() 
        + surveyData['Values Differences']['GL'].toString() + surveyData['Values Differences']['BL'].toString() + surveyData['Values Differences']['user'].toString() 
        + surveyData['Cultural Perspective']['GL'].toString() + surveyData['Cultural Perspective']['BL'].toString() + surveyData['Cultural Perspective']['user'].toString() 
        + surveyData['Culturally Versatile']['GL'].toString() + surveyData['Culturally Versatile']['BL'].toString() + surveyData['Culturally Versatile']['user'].toString() 
        + surveyData['Multicultural Motivator']['GL'].toString() + surveyData['Multicultural Motivator']['BL'].toString() + surveyData['Multicultural Motivator']['user'].toString()
        + surveyData['Inspires Commitment']['GL'].toString() + surveyData['Inspires Commitment']['BL'].toString() + surveyData['Inspires Commitment']['user'].toString() 
        + surveyData['Leverages Others\' Strengths']['GL'].toString() + surveyData['Leverages Others\' Strengths']['BL'].toString() + surveyData['Leverages Others\' Strengths']['user'].toString() 
        + surveyData['Influences Without Authority']['GL'].toString() + surveyData['Influences Without Authority']['BL'].toString() + surveyData['Influences Without Authority']['user'].toString()
        + surveyData['Considerate']['GL'].toString() + surveyData['Considerate']['BL'].toString() + surveyData['Considerate']['user'].toString() 
        + surveyData['Careful Listener']['GL'].toString() + surveyData['Careful Listener']['BL'].toString() + surveyData['Careful Listener']['user'].toString()
        + surveyData['Gives Directio ']['GL'].toString() + surveyData['Gives Directio ']['BL'].toString() + surveyData['Gives Directio ']['user'].toString() 
        + surveyData['Prioritizes Effectively']['GL'].toString() + surveyData['Prioritizes Effectively']['BL'].toString() + surveyData['Prioritizes Effectively']['user'].toString() 
        + surveyData['Clarifies Roles']['GL'].toString() + surveyData['Clarifies Roles']['BL'].toString() + surveyData['Clarifies Roles']['user'].toString() 
        + surveyData['Provides Guidance']['GL'].toString() + surveyData['Provides Guidance']['BL'].toString() + surveyData['Provides Guidance']['user'].toString() 
        + surveyData['Gives Candid Feedback']['GL'].toString() + surveyData['Gives Candid Feedback']['BL'].toString() + surveyData['Gives Candid Feedback']['user'].toString()
        + surveyData['Shares Leadership']['GL'].toString() + surveyData['Shares Leadership']['BL'].toString() + surveyData['Shares Leadership']['user'].toString() 
        + surveyData['Shares Responsibility']['GL'].toString() + surveyData['Shares Responsibility']['BL'].toString() + surveyData['Shares Responsibility']['user'].toString() 
        + surveyData['Believes in Others']['GL'].toString() + surveyData['Believes in Others']['BL'].toString() + surveyData['Believes in Others']['user'].toString() 
        + surveyData['Trusting of Others']['GL'].toString() + surveyData['Trusting of Others']['BL'].toString() + surveyData['Trusting of Others']['user'].toString() 
        + surveyData['Maintains Accountability']['GL'].toString() + surveyData['Maintains Accountability']['BL'].toString() + surveyData['Maintains Accountability']['user'].toString()
        + surveyData['Defines Problems Effectively']['GL'].toString() + surveyData['Defines Problems Effectively']['BL'].toString() + surveyData['Defines Problems Effectively']['user'].toString() 
        + surveyData['Makes Informed Decisions']['GL'].toString() + surveyData['Makes Informed Decisions']['BL'].toString() + surveyData['Makes Informed Decisions']['user'].toString() 
        + surveyData['Logical Thinker']['GL'].toString() + surveyData['Logical Thinker']['BL'].toString() + surveyData['Logical Thinker']['user'].toString() 
        + surveyData['Uses Judgment']['GL'].toString() + surveyData['Uses Judgment']['BL'].toString() + surveyData['Uses Judgment']['user'].toString() 
        + surveyData['Decisive']['GL'].toString() + surveyData['Decisive']['BL'].toString()+ surveyData['Decisive']['BL'].toString()
        + surveyData['Sees Big Picture']['GL'].toString() + surveyData['Sees Big Picture']['BL'].toString() + surveyData['Sees Big Picture']['user'].toString() 
        + surveyData['Systemic Awareness']['GL'].toString() + surveyData['Systemic Awareness']['BL'].toString() + surveyData['Systemic Awareness']['user'].toString() 
        + surveyData['Recognizes Trade-offs']['GL'].toString() + surveyData['Recognizes Trade-offs']['BL'].toString() + surveyData['Recognizes Trade-offs']['user'].toString() 
        + surveyData['Articulates Pros and Cons']['GL'].toString() + surveyData['Articulates Pros and Cons']['BL'].toString() + surveyData['Articulates Pros and Cons']['user'].toString()
        + surveyData['Senses Leverage']['GL'].toString() + surveyData['Senses Leverage']['BL'].toString() + surveyData['Senses Leverage']['user'].toString()
        + surveyData['Encourages Honesty']['GL'].toString() + surveyData['Encourages Honesty']['BL'].toString() + surveyData['Encourages Honesty']['user'].toString() 
        + surveyData['Trustworthy']['GL'].toString() + surveyData['Trustworthy']['BL'].toString() + surveyData['Trustworthy']['user'].toString() 
        + surveyData['Ethical Decision-maker']['GL'].toString() + surveyData['Ethical Decision-maker']['BL'].toString() + surveyData['Ethical Decision-maker']['user'].toString() 
        + surveyData['Ethically Aware']['GL'].toString() + surveyData['Ethically Aware']['BL'].toString() + surveyData['Ethically Aware']['user'].toString() 
        + surveyData['Principled']['GL'].toString() + surveyData['Principled']['BL'].toString() + surveyData['Principled']['user'].toString()
        + surveyData['Entrepeneurial']['GL'].toString() + surveyData['Entrepeneurial']['BL'].toString() + surveyData['Entrepeneurial']['user'].toString()
        + surveyData['Thinks Different']['GL'].toString() + surveyData['Thinks Different']['BL'].toString() + surveyData['Thinks Different']['user'].toString()
        + surveyData['Inventive']['GL'].toString() + surveyData['Inventive']['BL'].toString() + surveyData['Inventive']['user'].toString() 
        + surveyData['Generative']['GL'].toString() + surveyData['Generative']['BL'].toString() + surveyData['Generative']['user'].toString() 
        + surveyData['Maker Instinct']['GL'].toString() + surveyData['Maker Instinct']['BL'].toString() + surveyData['Maker Instinct']['user'].toString();
        var studentHolder = [];
        var responseHolder = [];
        responseHolder['smu_id'] = surveyData['smuID'];
        responseHolder['Surevy_Resp'] = allResponses;
        
            axios
                .get(`hartBE/v1/student/${surveyData['smuID']}`)
                .then(res => {
                    studentHolder = res.data.response;
                }).catch(err=> console.log(err))
            
        studentHolder['self_aware'] = selfAware;
        studentHolder['intentional_learner'] = intentionalLearner;
        studentHolder['communication'] = communication;
        studentHolder['relationship_development'] = relationshipDevelopment;
        studentHolder['diversity_difference'] = diversityDifference;
        studentHolder['engaging_leadership'] = engagingLeadership;
        studentHolder['directive_leadership'] = directiveLeadership;
        studentHolder['champions_processes'] = championsProcesses;
        studentHolder['problem_solving'] = problemSolving;
        studentHolder['strategic_perspective'] = strategicPerspective;
        studentHolder['ethics_Integrity'] = ethicsIntegrity;
        studentHolder['innovative_spirit'] = innovativeSpirit;
        studentHolder['gender'] = surveyData['gender'];
        studentHolder['ethnicity'] = surveyData['ethnicity'];
        
            try {
              const req = studentHolder;
                axios
                .post(`hartBE/v1/student/${surveyData['smuID']}`, req)
                .then(resp => {
                console.log(resp)
        })
            }  catch (e){
              console.log(e);
          }
        
            try {
              const req = responseHolder;
                axios
                .post(`hartBE/v1/surveys/${surveyData['smuID']}`, req)
                .then(resp => {
                console.log(resp)
        })
            }  catch (e){
              console.log(e);
            } 
    });  
} else {
    model
    .onComplete
    .add(function (sender, options) {
        var mySurvey = sender;
        var surveyData = sender.data;
        console.log(globalArr)
        let localArr = globalArr.splice(0, globalArr.length/2)
        console.log(localArr)
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
  
}
Surveys.defaultProps = {
    questions: 'a'
  };
render(<Surveys />, document.getElementById('root'));
export default
(Surveys);






