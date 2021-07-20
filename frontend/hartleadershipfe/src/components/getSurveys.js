import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/authActions.js';
import {HartAPIPrefix} from '../prefixes/hart';
import { Link } from 'react-router-dom';
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Button } from 'react-bootstrap';
import Loading from "./Loading";
import { Redirect } from 'react-router-dom'
import { Component } from 'react';
import {connect} from 'react-redux';
import Surveys from "./Surveys.js"
const GetSurveys = (props) => {
//    const { user } = useSelector(state => state.auth.user);
const { user } = useSelector(state => state.auth.user);
const [surveys, setSurveys]= useState([]);
   const [questions, setQuestions]= useState([]);
   const [prevResults, setPrevResults]= useState([]);
   const prevProps = useRef(props);
   const [isLoading, setIsLoading] = useState(true);
   const [isLoading2, setIsloading2] = useState(true)
   function handleResult() {
    console.log('Results');

}  
function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}

   const fetchQuestions = async () => {
       
       await axios
           .get(`${HartAPIPrefix}/survey/get/1`)
           .then(res => {
               const videos = res.data.response;
               console.log(videos)
               timeout(3000)
               setQuestions(videos);
               setIsLoading(false);
           }).catch(err=> console.log(err))
       };
       const fetchSurveys = async () => {
        await axios
            .get(`${HartAPIPrefix}/survey/`)
            .then(res => {
                timeout(3000)
            const surveys = res.data.response;
            setSurveys(surveys);
            }).catch(err=> console.log(err))
        };
                   const fetchStudentResponses = async () => {
            await axios
            .get(`${HartAPIPrefix}/response/${user.info.smu_id}`)
            .then(res => {
                timeout(3000)
                const students = res.data;
                console.log(students.response.length == 0)
                setPrevResults(students.response);
            }).catch(err=> console.log(err))
           };
   useEffect(
       () => {

           fetchStudentResponses();
           fetchSurveys();
           fetchQuestions();
           setIsloading2(false);
          
       },[]);
return (
    <>
   <div
       className='container justify-content-center align-items-center h-100'
   >
{isLoading ? (
                   <Loading/>
                ) : (
<div>
                   <h1><b>The Hart Leadership Assessment</b></h1>
   {
       isLoading2 ? (<div>
           <Loading></Loading>
       </div>) : (<div>
        {prevResults.length != 0 ? <div> 
                    You have taken the survey before.
                    Someday your results will be displayed here
                    If you would like to take the survey again, please click here.
                    </div> : 
                    <div>
                        Begin Survey
                        <Surveys questions={questions} handleResult = {handleResult} competencyQuiz={false} title={surveys.title}/>

                        </div>}
           </div>
                )
               }
           
       </div>)
   }
   </div>
   
               
   </>
);
};
 
export default GetSurveys;


// class getSurveys extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             showing: false,
//             resultShowing: false,
//             buttonShowing: true,
//             info: [
//                 {
//                     type: 0,
//                     name: "firstName",
//                     title: "First Name:",
//                     input: "text",
//                     auto: "text"
//                 },
//                 {
//                     type: 0,
//                     name: "lastName",
//                     title: "Last Name:",
//                     input: "text",
//                     auto: "text"
//                 },
//                 {
//                     type: 0,
//                     name: "graduationYear",
//                     title: "Graduation year:",
//                     input: "text",
//                     auto: "text"
//                 },
//                 {
//                     type: 0,
//                     name: "smuID",
//                     title: "Enter your SMU ID:",
//                     input: "text",
//                     auto: "name"
//                 },
//                 {
//                     title: "Is this your first time taking the exam?",
//                     type: 3,
//                     name: "test115"
//                 },



//                 {
//                     title: "Candid Self Appraisal: Aware of personal strengths and shortcomings",
//                     type: 1,
//                     name: "Candid Self Appraisal",
//                     choice: ["GL", "User", "BL"]
//                 },
//                 {
//                     title: "Self Management: Avoids spreading self too thin",
//                     type: 1,
//                     name: "Self Management",
//                     choice: ["GL", "User", "BL"]
//                 },
//                 {
//                     title: "Self Disciplined: Stays on task even under difficult circumstances",
//                     type: 1,
//                     name: "Self Disciplined",
//                     choice: ["GL", "User", "BL"]
//                 },
//                 {
//                     title: "Optimistic: Believes most problems can be solved",
//                     type: 1,
//                     name: "Optomistic",
//                     choice: ["GL", "User", "BL"]
//                 },
//                 {
//                     title: "Open to Feedback: Willing to receive constructive criticism",
//                     type: 1,
//                     name: "Open to Feedback",
//                     choice: ["GL", "User", "BL"]
//                 },
//                 {
//                     title: "Self Disciplined: Stays on task even under difficult circumstances",
//                     type: 1,
//                     name: "a",
//                     choice: ["GL", "User", "BL"]
//                 },
//                 {
//                     title: "Candid Self Appraisal: Aware of personal strengths and shortcomings",
//                     type: 1,
//                     name: "aa",
//                     choice: ["GL", "User", "BL"]
//                 },
//                 {
//                     title: "Self Management: Avoids spreading self too thin",
//                     type: 1,
//                     name: "aaa",
//                     choice: ["GL", "User", "BL"]
//                 },
//                 {
//                     title: "Candid Self Appraisal: Aware of personal strengths and shortcomings",
//                     type: 1,
//                     name: "aaaa",
//                     choice: ["GL", "User", "BL"]
//                 },
//                 {
//                     title: "Self Disciplined: Stays on task even under difficult circumstances",
//                     type: 1,
//                     name: "aaaaa",
//                     choice: ["GL", "User", "BL"]
//                 },
//                 {
//                     title: "Self Management: Avoids spreading self too thin",
//                     type: 1,
//                     name: "aaaaaa",
//                     choice: ["GL", "User", "BL"]
//                 },
//                 {
//                     title: "Self Disciplined: Stays on task even under difficult circumstances",
//                     type: 1,
//                     name: "b",
//                     choice: ["GL", "User", "BL"]
//                 },
//                 {
//                     title: "Candid Self Appraisal: Aware of personal strengths and shortcomings",
//                     type: 1,
//                     name: "bb",
//                     choice: ["GL", "User", "BL"]
//                 },
//                 {
//                     title: "Self Management: Avoids spreading self too thin",
//                     type: 1,
//                     name: "bbb",
//                     choice: ["GL", "User", "BL"]
//                 }
//             ],
//         }
//     }
//     handleResult = () => {
//         console.log('Results');
    
//     }

   
//     getData = async () => {
//         await axios
//             .get(`hartBE/v1/surveys/`)
//             .then(res => {
//                 var fullSurvey = res.data.response;
//                 this.setState({info: fullSurvey});
//             });
//     };
    
   
//     render() {
//         //console.log(this.state.questions)
//         return (
//             <div>
//                 { this.state.buttonShowing 
//                     ? <div>
//                     <button onClick={() => {this.setState({ showing: true }); this.setState({ buttonShowing: false });}}>Take Survey</button>
//                     <button onClick={() => {this.setState({ resultShowing: true }); this.setState({ buttonShowing: false });}}>See Results</button>
//                     </div>
//                     : null
//                 }
                
//                 { this.state.resultShowing 
//                     ? <div>
//                         No Results
//                     </div>
//                     : null
//                 }
//                 { this.state.showing 
//                     ? <Surveys questions= {this.state.info} handleResult = {this.handleResult}/>
//                     : null
//                 }
//             </div>  
            
//         );
//     }
// }

// export default getSurveys;
