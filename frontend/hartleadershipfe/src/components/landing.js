// import RegisterPopup from "./register/registerPopup";
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import { Link } from 'react-router-dom';
// import base_url from '../base_url';
const base_url = "placeholder";
const Landing = () => {
    const { user } = useSelector(state => state.auth);
    const [appointments, setAppointments] = useState([]);
    const [services, setServices] = useState([]);
    useEffect(() => {
        const fetchStylist = async () => {
            await axios
                .get(`http://${base_url}:8000/api/stylists/${user.id}`)
                .then(res => {
                    const stylistData = res.data.stylist;
                    console.log(stylistData);
                    setServices(stylistData.services);
                });
        };
        fetchStylist();
    }, [services]);

    useEffect(() => {
        const fetchAppointments = async () => {
            await axios
                .get(
                    `http://${base_url}:8000/api/stylists/appointments/${user.id}`
                )
                .then(res => {
                    const appts = res.data.appointments;
                    setAppointments(appts);
                });
        };
        fetchAppointments();
    }, [appointments]);
    return (
        <div
            className='container justify-content-center align-items-center h-100'
            style={{ marginTop: '3%' }}
        >
            To be done. This will be a login/register navigator.
            {/* <div className='row'>
                <div className='justify-content-center container valign-wrapper'>
                    <h1>
                        {' '}
                        Hello {`${user.firstName}  ${user.lastName}`} welcome to
                        Ultimate Style!
                    </h1>
                    <div>
                        <div className='row'>
                            <div className='col center-align'>
                                <Link
                                    to={`/stylists/stylistCalendar/stylistId=${user.id}`}
                                    style={{
                                        width: '140px',
                                        borderRadius: '3px',
                                        letterSpacing: '1.5px',
                                        padding: '12px',
                                    }}
                                    className='btn btn-large btn-flat waves-effect blue black-text'
                                >
                                    Calendar
                                </Link>
                                <Link
                                    to='/'
                                    style={{
                                        width: '140px',
                                        borderRadius: '3px',
                                        letterSpacing: '1.5px',
                                        padding: '12px',
                                    }}
                                    className='btn btn-large btn-flat waves-effect blue black-text'
                                >
                                    Back to home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );


}

export default Landing;
