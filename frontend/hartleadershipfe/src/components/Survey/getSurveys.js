import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from "../Loading";
import {fetchStudentResponses} from "../../actions/surveyActions.js";
import SurveyModal from "./SurveyModal";
import PastAssessmentsList from "./pastAssessmentsList";
const GetSurveys = (props) => {
const { user } = useSelector(state => state.auth.user);
const [prevResults, setPrevResults]= useState([]);
const prevProps = useRef(props);
const [isLoading, setIsLoading] = useState(true);
useEffect(
    () => {
        fetchStudentResponses(setPrevResults, user.info.smu_id);   
        setIsLoading(false); 
    },[])
return (
    <>
   <div
       className='container justify-content-center align-items-center h-100'
   >
                   <h1><b>The Hart Leadership Assessment</b></h1>
                   {isLoading ? (
                    <Loading/> 
                 ) : (
                     <div>
                    {prevResults.length != 0 ? <PastAssessmentsList responses={prevResults}>

                    </PastAssessmentsList>: (
                               <SurveyModal>
                               </SurveyModal>)}
                               </div>
                 )}
         
               
   </div>
   
               
   </>
);
};
 
export default GetSurveys;

