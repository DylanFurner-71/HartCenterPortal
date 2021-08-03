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
   const { user } = useSelector(state => state.auth.user);


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
                   isRequired: true,
                       columns: [{ value: 1, text: "1" },
                           { value: 2, text: "2" },
                           { value: 3, text: "3" },
                           { value: 4, text: "4" }],
                       rows: [
                           { value: value.choice1, text: props.gl }, //need to add this to the database to make it work for all of the questions,
                           { value: value.choice2, text: "You" },
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
       var surveyData = sender.data;
       console.log(surveyData, "surveyData")
       console.log(typeof surveyData)
       console.log(typeof surveyData['CandidSelfAppraisal'])
       //code is broken from here onwards. Thanks John!!!!!
    //    var selfAware = surveyData.Candid Self Appraisal.user + surveyData.Commits Wisely.user + surveyData.Composed.user + surveyData.Self Directed.user + surveyData.Open to Feedback.user;
    //    var intentionalLearner = surveyData.Improves Performance.user + surveyData.Wiling to Stretch.user + surveyData.Reflective Learner.user + surveyData.Grows from Adversity.user + surveyData.Seeks Feedback.user;
    //    var communication = surveyData.Open to Feedback.user + surveyData.Seeks Feedback.user + surveyData.Transparent.user + surveyData.Careful Listener.user + surveyData.Gives Candid Feedback.user;
    //    var relationshipDevelopment = surveyData.Inclusive.user + surveyData.Empathetic.user + surveyData.Mends Fences.user + surveyData.Seek Common Ground.user + surveyData.Transparent.user;
    //    var diversityDifference = surveyData.Student of Culture.user + surveyData.Values Differences.user + surveyData.Cultural Perspective.user + surveyData.Culturally Versatile.user + surveyData.Multicultural Motivator.user;
    //    var engagingLeadership = surveyData.Inspires Commitment.user + surveyData.Leverages Others\' Strengths.user + surveyData.Influences Without Authority.user + surveyData.Considerate.user + surveyData.Careful Listener.user;
    //    var directiveLeadership = surveyData.Gives Directio .user + surveyData.Prioritizes Effectively.user + surveyData.Clarifies Roles.user + surveyData.Provides Guidance.user + surveyData.Gives Candid Feedback.user;
    //    var championsProcesses = surveyData.Shares Leadership.user + surveyData.Shares Responsibility.user + surveyData.Believes in Others.user + surveyData.Trusting of Others.user + surveyData.Maintains Accountability.user;
    //    var problemSolving = surveyData.Defines Problems Effectively.user + surveyData.Makes Informed Decisions.user + surveyData.Logical Thinker.user + surveyData.Uses Judgment.user + surveyData.Decisive.user;
    //    var strategicPerspective = surveyData.Sees Big Picture.user + surveyData.Systemic Awareness.user + surveyData.Recognizes Trade-offs.user + surveyData.Articulates Pros and Cons.user + surveyData.Senses Leverage.user;
    //    var ethicsIntegrity = surveyData.Encourages Honesty.user + surveyData.Trustworthy.user + surveyData.Ethical Decision-maker.user + surveyData.Ethically Aware.user + surveyData.Principled.user;
    //    var innovativeSpirit = surveyData.Entrepeneurial.user + surveyData.Thinks Different.user + surveyData.Inventive.user + surveyData.Generative.user + surveyData.Maker Instinct.user;
 
 
    //    var allResponses = surveyData.Candid Self Appraisal.GL.toString() + ',' + surveyData.Candid Self Appraisal.BL.toString() + ',' + surveyData.Candid Self Appraisal.user.toString() + ','
    //    + surveyData.Commits Wisely.GL.toString() + ',' + surveyData.Commits Wisely.BL.toString() + ',' + surveyData.Commits Wisely.user.toString() + ','
    //    + surveyData.Composed.GL.toString() + ',' + surveyData.Composed.BL.toString() + ',' + surveyData.Composed.user.toString() + ','
    //    + surveyData.Self Directed.GL.toString() + ',' + surveyData.Self Directed.BL.toString() + ',' + surveyData.Self Directed.user.toString() + ','
    //    + surveyData.Open to Feedback.GL.toString() + ',' + surveyData.Open to Feedback.BL.toString() + ',' + surveyData.Open to Feedback.user.toString() + ','
    //    + surveyData.Improves Performance.GL.toString() + ',' + surveyData.Improves Performance.BL.toString() + ',' + surveyData.Improves Performance.user.toString() + ','
    //    + surveyData.Wiling to Stretch.GL.toString() + ',' + surveyData.Wiling to Stretch.BL.toString() + ',' + surveyData.Wiling to Stretch.user.toString() + ','
    //    + surveyData.Reflective Learner.GL.toString() + ',' + surveyData.Reflective Learner.BL.toString() + ',' + surveyData.Reflective Learner.user.toString() + ','
    //    + surveyData.Grows from Adversity.GL.toString() + ',' + surveyData.Grows from Adversity.BL.toString() + ',' + surveyData.Grows from Adversity.user.toString() + ','
    //    + surveyData.Seeks Feedback.GL.toString() + ',' + surveyData.Seeks Feedback.BL.toString() + ',' + surveyData.Seeks Feedback.user.toString() + ','
    //    + surveyData.Inclusive.GL.toString() + ',' + surveyData.Inclusive.BL.toString() + ',' + surveyData.Inclusive.user.toString() + ','
    //    + surveyData.Empathetic.GL.toString() + ',' + surveyData.Empathetic.BL.toString() + ',' + surveyData.Empathetic.user.toString() + ','
    //    + surveyData.Mends Fences.GL.toString() + ',' + surveyData.Mends Fences.BL.toString() + ',' + surveyData.Mends Fences.user.toString() + ','
    //    + surveyData.Seek Common Ground.GL.toString() + ',' + surveyData.Seek Common Ground.BL.toString() + ','+ surveyData.Seek Common Ground.user.toString() + ','
    //    + surveyData.Transparent.GL.toString() + ',' + surveyData.Transparent.BL.toString() + ',' + surveyData.Transparent.user.toString() + ','
    //    + surveyData.Student of Culture.GL.toString() + ',' + surveyData.Student of Culture.BL.toString() + ',' + surveyData.Student of Culture.user.toString() + ','
    //    + surveyData.Values Differences.GL.toString() + ',' + surveyData.Values Differences.BL.toString() + ',' + surveyData.Values Differences.user.toString() + ','
    //    + surveyData.Cultural Perspective.GL.toString() + ',' + surveyData.Cultural Perspective.BL.toString() + ',' + surveyData.Cultural Perspective.user.toString() + ','
    //    + surveyData.Culturally Versatile.GL.toString() + ',' + surveyData.Culturally Versatile.BL.toString() + ',' + surveyData.Culturally Versatile.user.toString() + ','
    //    + surveyData.Multicultural Motivator.GL.toString() + ',' + surveyData.Multicultural Motivator.BL.toString() + ',' + surveyData.Multicultural Motivator.user.toString() + ','
    //    + surveyData.Inspires Commitment.GL.toString() + ',' + surveyData.Inspires Commitment.BL.toString() + ',' + surveyData.Inspires Commitment.user.toString() + ','
    //    + surveyData.Leverages Others\' Strengths.GL.toString() + ',' + surveyData.Leverages Others\' Strengths.BL.toString() + ',' + surveyData.Leverages Others\' Strengths.user.toString() + ','
    //    + surveyData.Influences Without Authority.GL.toString() + ',' + surveyData.Influences Without Authority.BL.toString() + ',' + surveyData.Influences Without Authority.user.toString() + ','
    //    + surveyData.Considerate.GL.toString() + ',' + surveyData.Considerate.BL.toString() + ',' + surveyData.Considerate.user.toString() + ','
    //    + surveyData.Careful Listener.GL.toString() + ',' + surveyData.Careful Listener.BL.toString() + ',' + surveyData.Careful Listener.user.toString() + ','
    //    + surveyData.Gives Directio .GL.toString() + ',' + surveyData.Gives Directio .BL.toString() + ',' + surveyData.Gives Directio .user.toString() + ','
    //    + surveyData.Prioritizes Effectively.GL.toString() + ',' + surveyData.Prioritizes Effectively.BL.toString() + ',' + surveyData.Prioritizes Effectively.user.toString() + ','
    //    + surveyData.Clarifies Roles.GL.toString() + ',' + surveyData.Clarifies Roles.BL.toString() + ',' + surveyData.Clarifies Roles.user.toString() + ','
    //    + surveyData.Provides Guidance.GL.toString() + ',' + surveyData.Provides Guidance.BL.toString() + ',' + surveyData.Provides Guidance.user.toString() + ','
    //    + surveyData.Gives Candid Feedback.GL.toString() + ',' + surveyData.Gives Candid Feedback.BL.toString() + ',' + surveyData.Gives Candid Feedback.user.toString() + ','
    //    + surveyData.Shares Leadership.GL.toString() + ',' + surveyData.Shares Leadership.BL.toString() + ',' + surveyData.Shares Leadership.user.toString() + ','
    //    + surveyData.Shares Responsibility.GL.toString() + ',' + surveyData.Shares Responsibility.BL.toString() + ',' + surveyData.Shares Responsibility.user.toString() + ','
    //    + surveyData.Believes in Others.GL.toString() + ',' + surveyData.Believes in Others.BL.toString() + ',' + surveyData.Believes in Others.user.toString() + ','
    //    + surveyData.Trusting of Others.GL.toString() + ',' + surveyData.Trusting of Others.BL.toString() + ',' + surveyData.Trusting of Others.user.toString() + ','
    //    + surveyData.Maintains Accountability.GL.toString() + ',' + surveyData.Maintains Accountability.BL.toString() + ',' + surveyData.Maintains Accountability.user.toString() + ','
    //    + surveyData.Defines Problems Effectively.GL.toString() + ',' + surveyData.Defines Problems Effectively.BL.toString() + ',' + surveyData.Defines Problems Effectively.user.toString() + ','
    //    + surveyData.Makes Informed Decisions.GL.toString() + ',' + surveyData.Makes Informed Decisions.BL.toString() + ',' + surveyData.Makes Informed Decisions.user.toString() + ','
    //    + surveyData.Logical Thinker.GL.toString() + ',' + surveyData.Logical Thinker.BL.toString() + ',' + surveyData.Logical Thinker.user.toString() + ','
    //    + surveyData.Uses Judgment.GL.toString() + ',' + surveyData.Uses Judgment.BL.toString() + ',' + surveyData.Uses Judgment.user.toString() + ','
    //    + surveyData.Decisive.GL.toString() + ',' + surveyData.Decisive.BL.toString() + ','+ surveyData.Decisive.BL.toString() + ','
    //    + surveyData.Sees Big Picture.GL.toString() + ',' + surveyData.Sees Big Picture.BL.toString() + ',' + surveyData.Sees Big Picture.user.toString() + ','
    //    + surveyData.Systemic Awareness.GL.toString() + ',' + surveyData.Systemic Awareness.BL.toString() + ',' + surveyData.Systemic Awareness.user.toString() + ','
    //    + surveyData.Recognizes Trade-offs.GL.toString() + ',' + surveyData.Recognizes Trade-offs.BL.toString() + ',' + surveyData.Recognizes Trade-offs.user.toString() + ','
    //    + surveyData.Articulates Pros and Cons.GL.toString() + ',' + surveyData.Articulates Pros and Cons.BL.toString() + ',' + surveyData.Articulates Pros and Cons.user.toString() + ','
    //    + surveyData.Senses Leverage.GL.toString() + ',' + surveyData.Senses Leverage.BL.toString() + ',' + surveyData.Senses Leverage.user.toString() + ','
    //    + surveyData.Encourages Honesty.GL.toString() + ',' + surveyData.Encourages Honesty.BL.toString() + ',' + surveyData.Encourages Honesty.user.toString() + ','
    //    + surveyData.Trustworthy.GL.toString() + ',' + surveyData.Trustworthy.BL.toString() + ',' + surveyData.Trustworthy.user.toString() + ','
    //    + surveyData.Ethical Decision-maker.GL.toString() + ',' + surveyData.Ethical Decision-maker.BL.toString() + ',' + surveyData.Ethical Decision-maker.user.toString() + ','
    //    + surveyData.Ethically Aware.GL.toString() + ',' + surveyData.Ethically Aware.BL.toString() + ',' + surveyData.Ethically Aware.user.toString() + ','
    //    + surveyData.Principled.GL.toString() + ',' + surveyData.Principled.BL.toString() + ',' + surveyData.Principled.user.toString() + ','
    //    + surveyData.Entrepeneurial.GL.toString() + ',' + surveyData.Entrepeneurial.BL.toString() + ',' + surveyData.Entrepeneurial.user.toString() + ','
    //    + surveyData.Thinks Different.GL.toString() + ',' + surveyData.Thinks Different.BL.toString() + ',' + surveyData.Thinks Different.user.toString() + ','
    //    + surveyData.Inventive.GL.toString() + ',' + surveyData.Inventive.BL.toString() + ',' + surveyData.Inventive.user.toString() + ','
    //    + surveyData.Generative.GL.toString() + ',' + surveyData.Generative.BL.toString() + ',' + surveyData.Generative.user.toString() + ','
    //    + surveyData.Maker Instinct.GL.toString() + ',' + surveyData.Maker Instinct.BL.toString() + ',' + surveyData.Maker Instinct.user.toString();
        let selfAware = surveyData.CandidSelfAppraisal.User+surveyData.CommitsWisely.User+surveyData.Composed.User+surveyData.SelfDirected.User+surveyData.OpentoFeedback.User;
        let intentionalLearner = surveyData.ImprovesPerformance.User+surveyData.WilingtoStretch.User+surveyData.ReflectiveLearner.User+surveyData.GrowsfromAdversity.User+surveyData.SeeksFeedback.User;
        let communication = surveyData.OpentoFeedback.User+surveyData.SeeksFeedback.User+surveyData.Transparent.User+surveyData.CarefulListener.User+surveyData.GivesCandidFeedback.User;
        let relationshipDevelopment = surveyData.Inclusive.User+surveyData.Empathetic.User+surveyData.MendsFences.User+surveyData.SeekCommonGround.User+surveyData.Transparent.User;
        let diversityDifference = surveyData.StudentofCulture.User+surveyData.ValuesDifferences.User+surveyData.CulturalPerspective.User+surveyData.CulturallyVersatile.User+surveyData.MulticulturalMotivator.User;
        let engagingLeadership = surveyData.InspiresCommitment.User+surveyData.LeveragesOthersStrengths.User+surveyData.InfluencesWithoutAuthority.User+surveyData.Considerate.User+surveyData.CarefulListener.User;
        let directiveLeadership = surveyData.GivesDirectio.User+surveyData.PrioritizesEffectively.User+surveyData.ClarifiesRoles.User+surveyData.ProvidesGuidance.User+surveyData.GivesCandidFeedback.User;
        let championsProcesses = surveyData.SharesLeadership.User+surveyData.SharesResponsibility.User+surveyData.BelievesinOthers.User+surveyData.TrustingofOthers.User+surveyData.MaintainsAccountability.User;
        let problemSolving = surveyData.DefinesProblemsEffectively.User+surveyData.MakesInformedDecisions.User+surveyData.LogicalThinker.User+surveyData.UsesJudgment.User+surveyData.Decisive.User;
        let strategicPerspective = surveyData.SeesBigPicture.User+surveyData.SystemicAwareness.User+surveyData.RecognizesTradeoffs.User+surveyData.ArticulatesProsandCons.User+surveyData.SensesLeverage.User;
        let ethicsIntegrity = surveyData.EncouragesHonesty.User+surveyData.Trustworthy.User+surveyData.EthicalDecisionMaker.User+surveyData.EthicallyAware.User+surveyData.Principled.User;
        let innovativeSpirit = surveyData.Entrepeneurial.User+surveyData.ThinksDifferent.User+surveyData.Inventive.User+surveyData.Generative.User+surveyData.MakerInstinct.User;
       
        let allResponses=surveyData.CandidSelfAppraisal.GL.toString()+','+surveyData.CandidSelfAppraisal.BL.toString()+','+surveyData.CandidSelfAppraisal.use.toString()+','
 
 
 
 
+surveyData.CommitsWisely.GL.toString()+','+surveyData.CommitsWisely.BL.toString()+','+surveyData.CommitsWisely.use.toString()+','
 
 
+surveyData.Composed.GL.toString()+','+surveyData.Composed.BL.toString()+','+surveyData.Composed.use.toString()+','
 
 
+surveyData.SelfDirected.GL.toString()+','+surveyData.SelfDirected.BL.toString()+','+surveyData.SelfDirected.use.toString()+','
 
 
+surveyData.OpentoFeedback.GL.toString()+','+surveyData.OpentoFeedback.BL.toString()+','+surveyData.OpentoFeedback.use.toString()+','
 
 
+surveyData.ImprovesPerformance.GL.toString()+','+surveyData.ImprovesPerformance.BL.toString()+','+surveyData.ImprovesPerformance.use.toString()+','
 
 
+surveyData.WilingtoStretch.GL.toString()+','+surveyData.WilingtoStretch.BL.toString()+','+surveyData.WilingtoStretch.use.toString()+','
 
 
+surveyData.ReflectiveLearne.GL.toString()+','+surveyData.ReflectiveLearne.BL.toString()+','+surveyData.ReflectiveLearne.use.toString()+','
 
 
+surveyData.GrowsfromAdversity.GL.toString()+','+surveyData.GrowsfromAdversity.BL.toString()+','+surveyData.GrowsfromAdversity.use.toString()+','
 
 
+surveyData.SeeksFeedback.GL.toString()+','+surveyData.SeeksFeedback.BL.toString()+','+surveyData.SeeksFeedback.use.toString()+','
 
 
+surveyData.Inclusive.GL.toString()+','+surveyData.Inclusive.BL.toString()+','+surveyData.Inclusive.use.toString()+','
 
 
+surveyData.Empathetic.GL.toString()+','+surveyData.Empathetic.BL.toString()+','+surveyData.Empathetic.use.toString()+','
 
 
+surveyData.MendsFences.GL.toString()+','+surveyData.MendsFences.BL.toString()+','+surveyData.MendsFences.use.toString()+','
 
 
+surveyData.SeekCommonGround.GL.toString()+','+surveyData.SeekCommonGround.BL.toString()+','+surveyData.SeekCommonGround.use.toString()+','
 
 
+surveyData.Transparent.GL.toString()+','+surveyData.Transparent.BL.toString()+','+surveyData.Transparent.use.toString()+','
 
 
+surveyData.StudentofCulture.GL.toString()+','+surveyData.StudentofCulture.BL.toString()+','+surveyData.StudentofCulture.use.toString()+','
 
 
+surveyData.ValuesDifferences.GL.toString()+','+surveyData.ValuesDifferences.BL.toString()+','+surveyData.ValuesDifferences.use.toString()+','
 
 
+surveyData.CulturalPerspective.GL.toString()+','+surveyData.CulturalPerspective.BL.toString()+','+surveyData.CulturalPerspective.use.toString()+','
 
 
+surveyData.CulturallyVersatile.GL.toString()+','+surveyData.CulturallyVersatile.BL.toString()+','+surveyData.CulturallyVersatile.use.toString()+','
 
 
+surveyData.MulticulturalMotivato.GL.toString()+','+surveyData.MulticulturalMotivato.BL.toString()+','+surveyData.MulticulturalMotivato.use.toString()+','
 
 
+surveyData.InspiresCommitment.GL.toString()+','+surveyData.InspiresCommitment.BL.toString()+','+surveyData.InspiresCommitment.use.toString()+','
 
 
+surveyData.LeveragesOthersStrengths.GL.toString()+','+surveyData.LeveragesOthersStrengths.BL.toString()+','+surveyData.LeveragesOthersStrengths.use.toString()+','
 
 
+surveyData.InfluencesWithoutAuthority.GL.toString()+','+surveyData.InfluencesWithoutAuthority.BL.toString()+','+surveyData.InfluencesWithoutAuthority.use.toString()+','
 
 
+surveyData.Considerate.GL.toString()+','+surveyData.Considerate.BL.toString()+','+surveyData.Considerate.use.toString()+','
 
 
+surveyData.CarefulListene.GL.toString()+','+surveyData.CarefulListene.BL.toString()+','+surveyData.CarefulListene.use.toString()+','
 
 
+surveyData.GivesDirectio.GL.toString()+','+surveyData.GivesDirectio.BL.toString()+','+surveyData.GivesDirectio.use.toString()+','
 
 
+surveyData.PrioritizesEffectively.GL.toString()+','+surveyData.PrioritizesEffectively.BL.toString()+','+surveyData.PrioritizesEffectively.use.toString()+','
 
 
+surveyData.ClarifiesRoles.GL.toString()+','+surveyData.ClarifiesRoles.BL.toString()+','+surveyData.ClarifiesRoles.use.toString()+','
 
 
+surveyData.ProvidesGuidance.GL.toString()+','+surveyData.ProvidesGuidance.BL.toString()+','+surveyData.ProvidesGuidance.use.toString()+','
 
 
+surveyData.GivesCandidFeedback.GL.toString()+','+surveyData.GivesCandidFeedback.BL.toString()+','+surveyData.GivesCandidFeedback.use.toString()+','
 
 
+surveyData.SharesLeadership.GL.toString()+','+surveyData.SharesLeadership.BL.toString()+','+surveyData.SharesLeadership.use.toString()+','
 
 
+surveyData.SharesResponsibility.GL.toString()+','+surveyData.SharesResponsibility.BL.toString()+','+surveyData.SharesResponsibility.use.toString()+','
 
 
+surveyData.BelievesinOthers.GL.toString()+','+surveyData.BelievesinOthers.BL.toString()+','+surveyData.BelievesinOthers.use.toString()+','
 
 
+surveyData.TrustingofOthers.GL.toString()+','+surveyData.TrustingofOthers.BL.toString()+','+surveyData.TrustingofOthers.use.toString()+','
 
 
+surveyData.MaintainsAccountability.GL.toString()+','+surveyData.MaintainsAccountability.BL.toString()+','+surveyData.MaintainsAccountability.use.toString()+','
 
 
+surveyData.DefinesProblemsEffectively.GL.toString()+','+surveyData.DefinesProblemsEffectively.BL.toString()+','+surveyData.DefinesProblemsEffectively.use.toString()+','
 
 
+surveyData.MakesInformedDecisions.GL.toString()+','+surveyData.MakesInformedDecisions.BL.toString()+','+surveyData.MakesInformedDecisions.use.toString()+','
 
 
+surveyData.LogicalThinke.GL.toString()+','+surveyData.LogicalThinke.BL.toString()+','+surveyData.LogicalThinke.use.toString()+','
 
 
+surveyData.UsesJudgment.GL.toString()+','+surveyData.UsesJudgment.BL.toString()+','+surveyData.UsesJudgment.use.toString()+','
 
 
+surveyData.Decisive.GL.toString()+','+surveyData.Decisive.BL.toString()+','+surveyData.Decisive.BL.toString()+','
 
 
+surveyData.SeesBigPicture.GL.toString()+','+surveyData.SeesBigPicture.BL.toString()+','+surveyData.SeesBigPicture.use.toString()+','
 
 
+surveyData.SystemicAwareness.GL.toString()+','+surveyData.SystemicAwareness.BL.toString()+','+surveyData.SystemicAwareness.use.toString()+','
 
 
+surveyData.RecognizesTradeOffs.GL.toString()+','+surveyData.RecognizesTradeOffs.BL.toString()+','+surveyData.RecognizesTradeOffs.use.toString()+','
 
 
+surveyData.ArticulatesProsandCons.GL.toString()+','+surveyData.ArticulatesProsandCons.BL.toString()+','+surveyData.ArticulatesProsandCons.use.toString()+','
 
 
+surveyData.SensesLeverage.GL.toString()+','+surveyData.SensesLeverage.BL.toString()+','+surveyData.SensesLeverage.use.toString()+','
 
 
+surveyData.EncouragesHonesty.GL.toString()+','+surveyData.EncouragesHonesty.BL.toString()+','+surveyData.EncouragesHonesty.use.toString()+','
 
 
+surveyData.Trustworthy.GL.toString()+','+surveyData.Trustworthy.BL.toString()+','+surveyData.Trustworthy.use.toString()+','
 
 
+surveyData.EthicalDecisionMaker.GL.toString()+','+surveyData.EthicalDecisionMaker.BL.toString()+','+surveyData.EthicalDecisionMaker.use.toString()+','
 
 
+surveyData.EthicallyAware.GL.toString()+','+surveyData.EthicallyAware.BL.toString()+','+surveyData.EthicallyAware.use.toString()+','
 
 
+surveyData.Principled.GL.toString()+','+surveyData.Principled.BL.toString()+','+surveyData.Principled.use.toString()+','
 
 
+surveyData.Entrepeneurial.GL.toString()+','+surveyData.Entrepeneurial.BL.toString()+','+surveyData.Entrepeneurial.use.toString()+','
 
 
+surveyData.ThinksDifferent.GL.toString()+','+surveyData.ThinksDifferent.BL.toString()+','+surveyData.ThinksDifferent.use.toString()+','
 
 
+surveyData.Inventive.GL.toString()+','+surveyData.Inventive.BL.toString()+','+surveyData.Inventive.use.toString()+','
 
 
+surveyData.Generative.GL.toString()+','+surveyData.Generative.BL.toString()+','+surveyData.Generative.use.toString()+','
 
 
+surveyData.MakerInstinct.GL.toString()+','+surveyData.MakerInstinct.BL.toString()+','+surveyData.MakerInstinct.use.toString();
 
 
 
      
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

