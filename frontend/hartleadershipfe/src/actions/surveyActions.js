import axios from 'axios';
import { string } from 'prop-types';
import {HartAPIPrefix, HartURL } from "../prefixes/hart";

export const fetchQuestions = async (setQuestions) => {
    await axios
        .get(`${HartAPIPrefix}/survey/1`)
        .then(res => {
            const videos = res.data.response;
            setQuestions(videos);
            return videos;
        }).catch(err=> console.log(err))
    };
    export const fetchSurveys = async (setSurveys) => {
     await axios
         .get(`${HartAPIPrefix}/survey/title/1`)
         .then(res => {
         const surveys = res.data.response;
         setSurveys(surveys);
         return surveys
         }).catch(err=> console.log(err))
     };
export const fetchStudentResponses = async (setPrevResults, smu_id) => {
         await axios
         .get(`${HartAPIPrefix}/response/${smu_id}`)
         .then(res => {
             const students = res.data;
             console.log(typeof(students.response[0].Survey_Resp));
             setPrevResults(students.response);
             return students.response
         }).catch(err=> console.log(err))
        };

        export function determineQuestion(value){
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
                                { value: 1, text: "1" },
                                { value: 2, text: "2" },
                                { value: 3, text: "3" },
                                { value: 4, text: "4" }],
                            rows: [
                                { value: value.choice1, text: value.gl }, //need to add this to the database to make it work for all of the questions,
                                { value: "You", text: "You" },
                               { value: value.choice3, text: value.bl }
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
                        for(const [indexInner,valueInner] of value.choices.entries()){
                            questionTest.choices.push(valueInner);
                        }
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

        export const deleteQuestion = (survey_id, questionid) => {
            return new Promise((resolve, reject) => {
                axios.delete(`${HartAPIPrefix}/survey/${questionid}/${survey_id}`)
                    .then(resp => resolve(resp.data))
                    .catch(err => console.log(err.response));
            })
          }
        export const getBestAndWorstCompetencies = async (smu_id) => {
            try {
                const req = smu_id;
                  axios
                  .get(`hartBE/v1/student/${smu_id}`, req).then(res => {return res})
              }  catch (e){
                console.log(e);
            }        
        }
        export const postStudentsResponse = async (studentHolder, smu_id) => {      
            try {
                const req = studentHolder;
                  axios
                  .post(`hartBE/v1/student/${smu_id}`, req)
                  .then(resp => {
                  console.log(resp, 'studentHolder')
          })
              }  catch (e){
                console.log(e);
            }
        }
        export const postStudentSurveyResponse = async (surveyData, smu_id, survey_id, gl, bl) => {  
            var responseHolder = Object.keys(surveyData).map(key => { //if needed in an array
                return surveyData[key];
            });
            var strings = [];
            responseHolder.forEach(element => {
                strings.push([element.GL, element.User, element.BL].join());
            })
        try {
            const d = new Date();
             const req = {
                 smu_id: smu_id,
                 Good_leader:gl,
                 Poor_leader:bl,
                 Survey_Resp: strings.join(),
                 surveydate: d.getUTCDate + "/" + d.getUTCMonth() + "/"+ d.getUTCFullYear()
             };
             console.log(req.surveydate);
              axios
              .post(`hartBE/v1/surssvey/1/${smu_id}`, req)
              .then(resp => {
                  console.log("POST STUDENT SURVEY RESPONSE: ", resp);
            //   handleClick(resp)
      })
          }  catch (e){
            console.log(e);
          } 
        }