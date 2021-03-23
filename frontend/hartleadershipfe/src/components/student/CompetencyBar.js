import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/authActions.js';
import {HartAPIPrefix} from '../../prefixes/hart';
import { Link } from 'react-router-dom';
import Col from "react-bootstrap/Col"
const competencyCard = props => {
    return <div> This will someday be card for each competency </div>
}
const CompetencyBar = (props) => {
    // const ourStudent = useDispatch() //maybe?
    // const user = localStorage.getItem('user');
    // const { user } = useSelector(state => state.auth.user);
    // console.log("USER ----->", user);
    console.log("PROPS, ", props);
return (
    <span className="competency">
        <h2>{props.competencyArea}</h2>
        {props.competencies.map(x=> {
                return <div>{x.competency} </div>
        })}
    </span>
);
};

export default CompetencyBar;