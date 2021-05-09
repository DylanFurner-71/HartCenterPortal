import React, {useEffect, useState, useReducer} from 'react';
import axios from 'axios'
import {Button, Navbar, Nav, NavDropdown, Form, FormControl} from "react-bootstrap"
import {useDispatch, useSelector, useStore} from "react-redux";
import {logoutUser} from "../actions/authActions";
import logo from "../images/hartCenterLogo.jpg";
import jwt_decode from 'jwt-decode';
import "../styles/navbar.scss"
function renderLogout(onLogout) {
    localStorage.getItem("accessToken") != null ? (
        <button
            onClick={onLogout}
            className='btn btn-warning mx-2'
        >
            Logout
        </button>
    ) : (
        <></>
    )

}
const Navigation = props => {
    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    console.log("user i avigatio", user);
    const onLogout = () => {
        dispatch(logoutUser());
        window.location.href = '/login/';

    };
    if (localStorage.getItem("accessToken") != null){
if (user.user.isStudent === false){
    return (
<div style={{  position: "sticky",
  top: "0", zIndex:999}}> 
<Navbar  style={{background: "#0033A0", color: "white"}} variant="dark" expand="lg" className="border-bottom">
<Navbar.Brand href="/admin/home">
    <img src={logo}
        className="d-inline-block alight-top"
        alt="Hart Leadership Assessment Portal"
        width="50px"
        height="50px"> 
    </img>
</Navbar.Brand>
<Nav className="mr-auto"> 
<Navbar.Toggle aria-controls="basic-navbar-nav"/>
<NavDropdown title = "Admin Options" id="basic-nav-dropdown">

    <NavDropdown.Item href="/viewReport/"> View Student Reports</NavDropdown.Item>

    <NavDropdown.Item href="/debrief-thankyou/"> View/Update De-Brief Session Date and Thank You Note</NavDropdown.Item>

    <NavDropdown.Item href="/surveyStatistics/"> View Survey Result Statistics</NavDropdown.Item>

</NavDropdown>
<Nav.Link href="/statistics/"> Statistics </Nav.Link>
<NavDropdown title = "Edit" id="basic-nav-dropdown">
        <NavDropdown.Item href ="/edit/hart_survey"> Leadership Survey </NavDropdown.Item> {/*all of these can and should be mapped into somethinng*/}
        <NavDropdown.Item href ="/comp/"> Competency</NavDropdown.Item> {/* Probbbaly make competency a variable */}
        <NavDropdown.Item href ="/contact/edit/"> Contact Us</NavDropdown.Item>
        </NavDropdown>
<Nav.Link href="/students/"> Student Management </Nav.Link>
</Nav>
{localStorage.getItem("accessToken") != null ? (
        <button
            onClick={onLogout}
            className='btn btn-warning mx-2'
        >
            Logout
        </button>
    ) : (
        <></>
    )}
</Navbar>

</div>
)
} else if (user.user.isStudent === true) {
    return (
        <div style={{  position: "sticky",
          top: "0", zIndex:999}}> 
        <Navbar  style={{background: "#0033A0", color: "white"}} variant="dark" expand="lg" className="border-bottom">
        <Navbar.Brand href="/student/home">
            <img src={logo}
                className="d-inline-block alight-top"
                alt="Hart Leadership Assessment Portal"
                width="50px"
                height="50px">
                
            </img>
        </Navbar.Brand>
        <Nav className="mr-auto"> 
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <NavDropdown title = "Hart Leadership Assessments" id="basic-nav-dropdown">
                <NavDropdown.Item href ="/survey2/"> Hart Leadership Survey </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href ="/other/survey/"> 
                Other Surveys
        </Nav.Link>
          <Nav.Link href ="/competency/library"> 
          Competency Library
            </Nav.Link>
          <Nav.Link href ="studenthelpsme"> 
                Hart Center Website
          </Nav.Link>
          <Nav.Link href ="/about/"> 
                About
          </Nav.Link>
          <Nav.Link href ="/contact/"> 
                Contact us
          </Nav.Link>
        </Nav>
        {localStorage.getItem("accessToken") != null ? (
                <button
                    onClick={onLogout}
                    className='btn btn-warning mx-2'
                >
                    Logout
                </button>
            ) : (
                <></>
            )}
        </Navbar>
        
            </div>
            );
        } 
        } else {
            return <div></div>
        }
}

export default Navigation;