import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/authActions.js';
import {HartAPIPrefix} from '../../prefixes/hart';
import { Link } from 'react-router-dom';
import {Card, Image} from "react-bootstrap";
const ReportOrSurveyCard = (props) => {
    return (
    <Card style={{width: "44%", margin: "3%", }}>
    <div className="row align-items-center">
    <Card.Body>
        {props.isReport === true && 
        <Card.Text>To View Previous Surveys, click here</Card.Text>
        }
        {props.isReport === false &&
                <Card.Text>To take the survey again, <a href="/survey/take">click here </a></Card.Text>
        }
    </Card.Body>
    </div>
</Card>
    )
};

export default ReportOrSurveyCard;