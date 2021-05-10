import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/authActions.js';
import {HartAPIPrefix} from '../../prefixes/hart';
import { Link } from 'react-router-dom';

const MyLeadership = () => {
    // const ourStudent = useDispatch() //maybe?
    // const user = localStorage.getItem('user');
    const { user } = useSelector(state => state.auth.user);
    console.log("USER ----->", user);
    const [students, setStudents] = useState([]);
    useEffect(() => {
        const fetchStudentStuff = async () => {
            await axios
                .get(`${HartAPIPrefix}/student/${user.info.smu_id}`)
                .then(res => {
                    const students = res.data.students;
                    console.log(students);
                     setStudents(students);
                });
        };
        fetchStudent();
    }, [students]);
return (
    <div>

    </div>
);
};

export default MyLeadership;