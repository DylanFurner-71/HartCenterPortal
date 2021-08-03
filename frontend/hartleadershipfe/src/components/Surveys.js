import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
 
 
let globalArr = [];
const Surveys = (props) => {
   const { user } = useSelector(state => state.auth.user)


       let history = useHistory();
       function handleClick(resp) {
         history.push("/survey/response/", {state: resp});
       }
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
                       columns: [{ value: 1, text: "1" },
                           { value: 2, text: "2" },
                           { value: 3, text: "3" },
                           { value: 4, text: "4" }],
                       rows: [
                           { value: value.choice1, text: props.gl }, //need to add this to the database to make it work for all of the questions,
                           { value: "You", text: "You" },
                           { value: value.choice3, text: props.bl }]
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
   });
   let inf = props.info
   if (props.competencyQuiz === false){
   model
   .onComplete
   .add(function (sender) {
       //on complete we post the two survey responses to their destinnationn
       var mySurvey = sender;
       var SurveyData = sender.data;
       console.log(SurveyData, "surveyData")
       console.log(typeof SurveyData)
       
       console.log(typeof SurveyData['OpentoFeedback'])
        let selfAware = SurveyData['CandidSelfAppraisal'].You+SurveyData['CommitsWisely'].You+SurveyData['Composed'].You+SurveyData['SelfDirected'].You+SurveyData['OpentoFeedback'].You;
        let intentionalLearner = SurveyData['ImprovesPerformance'].You+SurveyData['WilingtoStretch'].You+SurveyData['ReflectiveLearner'].You+SurveyData['GrowsfromAdversity'].You+SurveyData['SeeksFeedback'].You;
        let communication = SurveyData['OpentoFeedback'].You+SurveyData['SeeksFeedback'].You+SurveyData['Transparent'].You+SurveyData['CarefulListener'].You+SurveyData['GivesCandidFeedback'].You;
        let relationshipDevelopment = SurveyData['Inclusive'].You+SurveyData['Empathetic'].You+SurveyData['MendsFences'].You+SurveyData['SeekCommonGround'].You+SurveyData['Transparent'].You;
        let diversityDifference = SurveyData['StudentofCulture'].You+SurveyData['ValuesDifferences'].You+SurveyData['CulturalPerspective'].You+SurveyData['CulturallyVersatile'].You+SurveyData['MulticulturalMotivator'].You;
        let engagingLeadership = SurveyData['InspiresCommitment'].You+SurveyData['LeveragesOthersStrengths'].You+SurveyData['InfluencesWithoutAuthority'].You+SurveyData['Considerate'].You+SurveyData['CarefulListener'].You;
        let directiveLeadership = SurveyData['GivesDirectio'].You+SurveyData['PrioritizesEffectively'].You+SurveyData['ClarifiesRoles'].You+SurveyData['ProvidesGuidance'].You+SurveyData['GivesCandidFeedback'].You;
        let championsProcesses = SurveyData['SharesLeadership'].You+SurveyData['SharesResponsibility'].You+SurveyData['BelievesinOthers'].You+SurveyData['TrustingofOthers'].You+SurveyData['MaintainsAccountability'].You;
        let problemSolving = SurveyData['DefinesProblemsEffectively'].You+SurveyData['MakesInformedDecisions'].You+SurveyData['LogicalThinker'].You+SurveyData['UsesJudgment'].You+SurveyData['Decisive'].You;
        let strategicPerspective = SurveyData['SeesBigPicture'].You+SurveyData['SystemicAwareness'].You+SurveyData['RecognizesTradeoffs'].You+SurveyData['ArticulatesProsandCons'].You+SurveyData['SensesLeverage'].You;
        let ethicsIntegrity = SurveyData['EncouragesHonesty'].You+SurveyData['Trustworthy'].You+SurveyData['EthicalDecisionMaker'].You+SurveyData['EthicallyAware'].You+SurveyData['Principled'].You;
        let innovativeSpirit = SurveyData['Entrepeneurial'].You+SurveyData['ThinksDifferent'].You+SurveyData['Inventive'].You+SurveyData['Generative'].You+SurveyData['MakerInstinct'].You;
        let allResponses=SurveyData['CandidSelfAppraisal'].GL.toString()+','+SurveyData['CandidSelfAppraisal'].BL.toString()+','+SurveyData['CandidSelfAppraisal'].You.toString()+','
 
 
 
 
+SurveyData['CommitsWisely'].GL.toString()+','+SurveyData['CommitsWisely'].BL.toString()+','+SurveyData['CommitsWisely'].You.toString()+','
 
 
+SurveyData['Composed'].GL.toString()+','+SurveyData['Composed'].BL.toString()+','+SurveyData['Composed'].You.toString()+','
 
 
+SurveyData['SelfDirected'].GL.toString()+','+SurveyData['SelfDirected'].BL.toString()+','+SurveyData['SelfDirected'].You.toString()+','
 
 
+SurveyData['OpentoFeedback'].GL.toString()+','+SurveyData['OpentoFeedback'].BL.toString()+','+SurveyData['OpentoFeedback'].You.toString()+','
 
 
+SurveyData['ImprovesPerformance'].GL.toString()+','+SurveyData['ImprovesPerformance'].BL.toString()+','+SurveyData['ImprovesPerformance'].You.toString()+','
 
 
+SurveyData['WilingtoStretch'].GL.toString()+','+SurveyData['WilingtoStretch'].BL.toString()+','+SurveyData['WilingtoStretch'].You.toString()+','
 
 
+SurveyData['ReflectiveLearne'].GL.toString()+','+SurveyData['ReflectiveLearne'].BL.toString()+','+SurveyData['ReflectiveLearne'].You.toString()+','
 
 
+SurveyData['GrowsfromAdversity'].GL.toString()+','+SurveyData['GrowsfromAdversity'].BL.toString()+','+SurveyData['GrowsfromAdversity'].You.toString()+','
 
 
+SurveyData['SeeksFeedback'].GL.toString()+','+SurveyData['SeeksFeedback'].BL.toString()+','+SurveyData['SeeksFeedback'].You.toString()+','
 
 
+SurveyData['Inclusive'].GL.toString()+','+SurveyData['Inclusive'].BL.toString()+','+SurveyData['Inclusive'].You.toString()+','
 
 
+SurveyData['Empathetic'].GL.toString()+','+SurveyData['Empathetic'].BL.toString()+','+SurveyData['Empathetic'].You.toString()+','
 
 
+SurveyData['MendsFences'].GL.toString()+','+SurveyData['MendsFences'].BL.toString()+','+SurveyData['MendsFences'].You.toString()+','
 
 
+SurveyData['SeekCommonGround'].GL.toString()+','+SurveyData['SeekCommonGround'].BL.toString()+','+SurveyData['SeekCommonGround'].You.toString()+','
 
 
+SurveyData['Transparent'].GL.toString()+','+SurveyData['Transparent'].BL.toString()+','+SurveyData['Transparent'].You.toString()+','
 
 
+SurveyData['StudentofCulture'].GL.toString()+','+SurveyData['StudentofCulture'].BL.toString()+','+SurveyData['StudentofCulture'].You.toString()+','
 
 
+SurveyData['ValuesDifferences'].GL.toString()+','+SurveyData['ValuesDifferences'].BL.toString()+','+SurveyData['ValuesDifferences'].You.toString()+','
 
 
+SurveyData['CulturalPerspective'].GL.toString()+','+SurveyData['CulturalPerspective'].BL.toString()+','+SurveyData['CulturalPerspective'].You.toString()+','
 
 
+SurveyData['CulturallyVersatile'].GL.toString()+','+SurveyData['CulturallyVersatile'].BL.toString()+','+SurveyData['CulturallyVersatile'].You.toString()+','
 
 
+SurveyData['MulticulturalMotivato'].GL.toString()+','+SurveyData['MulticulturalMotivato'].BL.toString()+','+SurveyData['MulticulturalMotivato'].You.toString()+','
 
 
+SurveyData['InspiresCommitment'].GL.toString()+','+SurveyData['InspiresCommitment'].BL.toString()+','+SurveyData['InspiresCommitment'].You.toString()+','
 
 
+SurveyData['LeveragesOthersStrengths'].GL.toString()+','+SurveyData['LeveragesOthersStrengths'].BL.toString()+','+SurveyData['LeveragesOthersStrengths'].You.toString()+','
 
 
+SurveyData['InfluencesWithoutAuthority'].GL.toString()+','+SurveyData['InfluencesWithoutAuthority'].BL.toString()+','+SurveyData['InfluencesWithoutAuthority'].You.toString()+','
 
 
+SurveyData['Considerate'].GL.toString()+','+SurveyData['Considerate'].BL.toString()+','+SurveyData['Considerate'].You.toString()+','
 
 
+SurveyData['CarefulListene'].GL.toString()+','+SurveyData['CarefulListene'].BL.toString()+','+SurveyData['CarefulListene'].You.toString()+','
 
 
+SurveyData['GivesDirectio'].GL.toString()+','+SurveyData['GivesDirectio'].BL.toString()+','+SurveyData['GivesDirectio'].You.toString()+','
 
 
+SurveyData['PrioritizesEffectively'].GL.toString()+','+SurveyData['PrioritizesEffectively'].BL.toString()+','+SurveyData['PrioritizesEffectively'].You.toString()+','
 
 
+SurveyData['ClarifiesRoles'].GL.toString()+','+SurveyData['ClarifiesRoles'].BL.toString()+','+SurveyData['ClarifiesRoles'].You.toString()+','
 
 
+SurveyData['ProvidesGuidance'].GL.toString()+','+SurveyData['ProvidesGuidance'].BL.toString()+','+SurveyData['ProvidesGuidance'].You.toString()+','
 
 
+SurveyData['GivesCandidFeedback'].GL.toString()+','+SurveyData['GivesCandidFeedback'].BL.toString()+','+SurveyData['GivesCandidFeedback'].You.toString()+','
 
 
+SurveyData['SharesLeadership'].GL.toString()+','+SurveyData['SharesLeadership'].BL.toString()+','+SurveyData['SharesLeadership'].You.toString()+','
 
 
+SurveyData['SharesResponsibility'].GL.toString()+','+SurveyData['SharesResponsibility'].BL.toString()+','+SurveyData['SharesResponsibility'].You.toString()+','
 
 
+SurveyData['BelievesinOthers'].GL.toString()+','+SurveyData['BelievesinOthers'].BL.toString()+','+SurveyData['BelievesinOthers'].You.toString()+','
 
 
+SurveyData['TrustingofOthers'].GL.toString()+','+SurveyData['TrustingofOthers'].BL.toString()+','+SurveyData['TrustingofOthers'].You.toString()+','
 
 
+SurveyData['MaintainsAccountability'].GL.toString()+','+SurveyData['MaintainsAccountability'].BL.toString()+','+SurveyData['MaintainsAccountability'].You.toString()+','
 
 
+SurveyData['DefinesProblemsEffectively'].GL.toString()+','+SurveyData['DefinesProblemsEffectively'].BL.toString()+','+SurveyData['DefinesProblemsEffectively'].You.toString()+','
 
 
+SurveyData['MakesInformedDecisions'].GL.toString()+','+SurveyData['MakesInformedDecisions'].BL.toString()+','+SurveyData['MakesInformedDecisions'].You.toString()+','
 
 
+SurveyData['LogicalThinke'].GL.toString()+','+SurveyData['LogicalThinke'].BL.toString()+','+SurveyData['LogicalThinke'].You.toString()+','
 
 
+SurveyData['UsesJudgment'].GL.toString()+','+SurveyData['UsesJudgment'].BL.toString()+','+SurveyData['UsesJudgment'].You.toString()+','
 
 
+SurveyData['Decisive'].GL.toString()+','+SurveyData['Decisive'].BL.toString()+','+SurveyData['Decisive'].BL.toString()+','
 
 
+SurveyData['SeesBigPicture'].GL.toString()+','+SurveyData['SeesBigPicture'].BL.toString()+','+SurveyData['SeesBigPicture'].You.toString()+','
 
 
+SurveyData['SystemicAwareness'].GL.toString()+','+SurveyData['SystemicAwareness'].BL.toString()+','+SurveyData['SystemicAwareness'].You.toString()+','
 
 
+SurveyData['RecognizesTradeOffs'].GL.toString()+','+SurveyData['RecognizesTradeOffs'].BL.toString()+','+SurveyData['RecognizesTradeOffs'].You.toString()+','
 
 
+SurveyData['ArticulatesProsandCons'].GL.toString()+','+SurveyData['ArticulatesProsandCons'].BL.toString()+','+SurveyData['ArticulatesProsandCons'].You.toString()+','
 
 
+SurveyData['SensesLeverage'].GL.toString()+','+SurveyData['SensesLeverage'].BL.toString()+','+SurveyData['SensesLeverage'].You.toString()+','
 
 
+SurveyData['EncouragesHonesty'].GL.toString()+','+SurveyData['EncouragesHonesty'].BL.toString()+','+SurveyData['EncouragesHonesty'].You.toString()+','
 
 
+SurveyData['Trustworthy'].GL.toString()+','+SurveyData['Trustworthy'].BL.toString()+','+SurveyData['Trustworthy'].You.toString()+','
 
 
+SurveyData['EthicalDecisionMaker'].GL.toString()+','+SurveyData['EthicalDecisionMaker'].BL.toString()+','+SurveyData['EthicalDecisionMaker'].You.toString()+','
 
 
+SurveyData['EthicallyAware'].GL.toString()+','+SurveyData['EthicallyAware'].BL.toString()+','+SurveyData['EthicallyAware'].You.toString()+','
 
 
+SurveyData['Principled'].GL.toString()+','+SurveyData['Principled'].BL.toString()+','+SurveyData['Principled'].You.toString()+','
 
 
+SurveyData['Entrepeneurial'].GL.toString()+','+SurveyData['Entrepeneurial'].BL.toString()+','+SurveyData['Entrepeneurial'].You.toString()+','
 
 
+SurveyData['ThinksDifferent'].GL.toString()+','+SurveyData['ThinksDifferent'].BL.toString()+','+SurveyData['ThinksDifferent'].You.toString()+','
 
 
+SurveyData['Inventive'].GL.toString()+','+SurveyData['Inventive'].BL.toString()+','+SurveyData['Inventive'].You.toString()+','
 
 
+SurveyData['Generative'].GL.toString()+','+SurveyData['Generative'].BL.toString()+','+SurveyData['Generative'].You.toString()+','
 
 
+SurveyData['MakerInstinct'].GL.toString()+','+SurveyData['MakerInstinct'].BL.toString()+','+SurveyData['MakerInstinct'].You.toString();
 
 
 
      
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

