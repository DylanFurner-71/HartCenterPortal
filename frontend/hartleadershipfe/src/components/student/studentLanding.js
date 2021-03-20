import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/authActions.js';
import {HartAPIPrefix} from '../../prefixes/hart';
import { Link } from 'react-router-dom';

const StudentLanding = () => {
    // const ourStudent = useDispatch() //maybe?
    // const user = localStorage.getItem('user');
    const { user } = useSelector(state => state.auth.user);
    console.log("USER ----->", user);
    const [students, setStudents] = useState([]);
    // useEffect(() => {
    //     const fetchStudent = async () => {
    //         await axios
    //             .get(`${HartAPIPrefix}/student/${user.info.smu_id}`)
    //             .then(res => {
    //                 const students = res.data.students;
    //                 console.log(students);
    //                  setStudents(students);
    //             });
    //     };
    //     fetchStudent();
    // }, [students]);
return (
    <div
        className='container justify-content-center align-items-center h-100'
        style={{ marginTop: '3%' }}
    >
        <div className='row'>
            <div className='justify-content-center container valign-wrapper'>
                <h1>
                    {' '}
                    Hello {`${user.info.first_name}  ${user.info.last_name}`} welcome to the Hart Leadership Assessment Portal
                </h1>
                <div className='container'></div>
                <div>
                    <div className='row'>
                        <div className='col center-align'>
                            link A
                            <Link
                                to={`/stylists/stylistCalendar/stylistId=${user.info.smu_id}`}
                                style={{
                                    width: '140px',
                                    borderRadius: '3px',
                                    letterSpacing: '1.5px',
                                    padding: '12px',
                                }}
                                className='btn btn-large btn-flat waves-effect blue black-text'
                            >
                                Past Assessments
                            </Link>
                       
                            <Link
                                to='/student/home'
                                style={{
                                    width: '140px',
                                    borderRadius: '3px',
                                    letterSpacing: '1.5px',
                                    padding: '12px',
                                }}
                                className='btn btn-large btn-flat waves-effect blue black-text'

                           >
                                LinkC
                                Back to home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default StudentLanding;