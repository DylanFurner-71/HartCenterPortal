import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/authActions.js';
import {HartAPIPrefix} from '../../prefixes/hart';
import { Link } from 'react-router-dom';
import Loading from "../Loading";
const StudentLanding = () => {
    // const ourStudent = useDispatch() //maybe?
    // const user = localStorage.getItem('user');
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth.user);
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const fetchStudentResponse = async () => {
        await axios
            .get(`${HartAPIPrefix}/response/${user.info.smu_id}`)
            .then(res => {
                const students = res.data;
                console.log(students)
                setResponse(students.response);
                setIsLoading(false);
            }).catch(err=> console.log(err))
    };
    useEffect(() => {
       
        fetchStudentResponse();
    }, []);
return (
    <div
        className='container justify-content-center align-items-center h-100'
        style={{ marginTop: '3%' }}
    >
        {isLoading ? (
            <Loading />
        ) : (
        <div className='row'>
            <div className='justify-content-center container align-wrapper'>
                <h1>
                    {' '}
                    Hello {`${user.info.first_name}  ${user.info.last_name}`} welcome to the Hart Leadership Assessment Portal
                
                </h1>
                {response.length > 0 ? <div> 
                    You have taken the survey before.
                    Click here to view your results and competencies.
                    </div> : 
                    <div>
                        You have not taken the survey before. <a href="/survey/">Click here</a> to take the Hart Leadership Survey and start learning about your individual leadership competencies and how to improve them!
                        </div>}
                <div className='container'></div>
                <div>
                  <h2>Please email us to </h2>
                </div>
            </div>
        </div>
        )}
    </div>
);
};

export default StudentLanding;