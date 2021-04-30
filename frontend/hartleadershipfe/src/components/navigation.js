import React, {useEffect, useState, useReducer} from 'react';
import axios from 'axios'
import {Button, Navbar, Nav, NavDropdown, Form, FormControl} from "react-bootstrap"
import {useDispatch, useSelector, useStore} from "react-redux";
import {logoutUser} from "../actions/authActions";
import logo from "../images/hartCenterLogo.jpg";
import jwt_decode from 'jwt-decode';
<<<<<<< HEAD
import "../styles/navbar.scss"
<<<<<<< HEAD
=======

=======
>>>>>>> parent of d97d485... Final commit before showcase
/*
To Do -- Logout functionality
    create an algorithm to map and array of category names to a nav drop down menu so when she adds something its there
*/

<<<<<<< HEAD
>>>>>>> origin
=======
>>>>>>> parent of d97d485... Final commit before showcase
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
    // const [user, setUser] = useState({});
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
  top: "0"}}> 
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
        <NavDropdown.Item href ="other/AddSurvey/"> Other Surveys</NavDropdown.Item> {/* need to make this a variable after i figure out logging in*/}
        <NavDropdown.Item href ="/comp/"> Competency</NavDropdown.Item> {/* Probbbaly make competency a variable */}
        <NavDropdown.Item href ="/edit/career/"> Career</NavDropdown.Item>
        <NavDropdown.Item href ="/edit/about/"> About</NavDropdown.Item>
        <NavDropdown.Item href ="/contact/edit/'"> Contact Us</NavDropdown.Item>
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
  top: "0"}}> 
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
        <NavDropdown.Item href ="/survey"> Leadership Survey </NavDropdown.Item>
</NavDropdown>
<NavDropdown title = "Other Assessments" id="basic-nav-dropdown">
        <NavDropdown.Item href ="/hartassessmentslink"> Survey 1</NavDropdown.Item>
        <NavDropdown.Item href ="/hartassessmentslink"> Survey 2</NavDropdown.Item>
</NavDropdown>
<Nav.Link href ="/other/survey/"> 
        Other Surveys
</Nav.Link>
  {/* <NavDropdown title ="My Leadership" id = "basic-nav-dropdown"> */}
  {/* <NavDropdown.Item href ="/leadership/me/"> My Leadership Dashboard </NavDropdown.Item> */}
  {/* <NavDropdown.Item href ="/competency/library/"> Competency Library </NavDropdown.Item> */}
  <Nav.Link href ="/competency/library"> 
  Competency Library
    </Nav.Link>
  {/* </NavDropdown> */}
  <Nav.Link href ="studenthelpsme"> 
        Hart Center Website
  </Nav.Link>
  <Nav.Link href ="studenthelpsme"> 
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