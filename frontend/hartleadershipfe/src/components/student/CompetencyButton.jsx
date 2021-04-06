import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, setCurrentCompetency } from '../../actions/authActions.js';
import {HartAPIPrefix} from '../../prefixes/hart';
import { Link } from 'react-router-dom';
import Col from "react-bootstrap/Col"
import { Button } from 'react-bootstrap';
import Loading from "../Loading";
import { Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";
// import {setCurrentCompetency} from "../../actions/authActions";
const CompetencyButton = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [competency, setCompetency]= useState([]);
    const prevProps = useRef(props);
    const [redirect, setRedirect] = useState(false);
    const [whichComp, setWhichComp] = useState('');
    const dispatch = useDispatch();

    function onClickButton(){
        setRedirect(true);
        dispatch(setCurrentCompetency(competency.props));
     }
    useEffect(
        () => {
            if (prevProps !== props) {            
                setCompetency(props);
              setIsLoading(false);
            }
        },[props]);
return (
    <div>
        {redirect ? <Redirect to={{pathname: `/competency/library/${competency.props.competency}`}}/>: null}
    {isLoading ? (
        <Loading/> 
     ) : (
    <span className="competency">
        <Button onClick={onClickButton} variant="light"> {`${competency.props.competency}`}</Button>
    </span>
     )}
    </div>
);
};

export default CompetencyButton;