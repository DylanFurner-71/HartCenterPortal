import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/authActions.js';
import {HartAPIPrefix} from '../../prefixes/hart';
import { Link } from 'react-router-dom';
import Col from "react-bootstrap/Col"
import { Button } from 'react-bootstrap';
import Loading from "../Loading";
import { Redirect } from 'react-router-dom'
import { Component } from 'react';
import {connect} from 'react-redux';
const Competency = (props) => {
    const { user } = useSelector(state => state.auth.user);
    const { competency } = useSelector(state => state.competency);
return (

    <div
        className='container justify-content-center align-items-center h-100'
    >
        <h1><b>{competency.competency}</b></h1>
    </div>
);
};

export default Competency;