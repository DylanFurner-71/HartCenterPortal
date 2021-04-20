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
class IntentionalLearning extends Component {
    constructor() {
        super();
        // this.state = {
        //     user: {},
        //     competency: {}
        // };
    }
    componentDidMount(){
        console.log("Competency: ", this.props.competency);
    }
    componentWillMount(){
        console.log("Competency: ", this.props.competency);
    }

render(){
 return (
     <>
    <div
    className='container justify-content-center align-items-center h-100'
>
     <div>
HELLO FROM INTENTIONAL LEARNING     
</div>
</div>
</>
 )
}
};
const mapStateToProps = (state) =>
{
    return { user: state.user, competency: state.competency}
}
export default connect(mapStateToProps, null)(IntentionalLearning);