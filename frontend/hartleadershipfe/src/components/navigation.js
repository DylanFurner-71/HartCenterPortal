import React, {useEffect, useState, useReducer} from 'react';
import axios from 'axios'
import {Button, Navbar, Nav, NavDropdown, Form, FormControl} from "react-bootstrap"
import {useDispatch, useSelector, useStore} from "react-redux";
import {logoutUser} from "../actions/authActions";
import logo from "../hartCenterLogo.jpg";

/*
To Do -- Logout functionality
    Add profile picture in top right for student and admin
    create an algorithm to map and array of category names to a nav drop down menu so when she adds something its there
*/


const Navigation = () => {
//     const [name, setName] = useState('');
    const user = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logoutUser())
    };
if (user.isAdmin){
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
<Nav.Link href="/statistics/"> Statistics </Nav.Link>
<NavDropdown title = "Edit" id="basic-nav-dropdown">
        <NavDropdown.Item href ="/edit/hart_survey"> Leadership Survey </NavDropdown.Item> {/*all of these can and should be mapped into somethinng*/}
        <NavDropdown.Item href ="/edit/other_survey/survey1"> Survey 1</NavDropdown.Item> {/* need to make this a variable after i figure out logging in*/}
        <NavDropdown.Item href ="/edit/other_survey/survey2"> Survey 2</NavDropdown.Item>
        <NavDropdown.Item href ="/edit/myleadership/competency/"> My Leadership - competency</NavDropdown.Item> {/* Probbbaly make competency a variable */}
        <NavDropdown.Item href ="/edit/career/"> Career</NavDropdown.Item>
        <NavDropdown.Item href ="/edit/about/"> About</NavDropdown.Item>
        <NavDropdown.Item href ="/edit/contact/"> Contact Us</NavDropdown.Item>
        </NavDropdown>
<Nav.Link href="/students/"> Student Management </Nav.Link>
</Nav>
</Navbar>
{user.isAuthenticated ? (
                        <button
                            onClick={onLogout}
                            className='btn btn-warning mx-2'
                        >
                            Logout
                        </button>
                    ) : (
                        <></>
                    )}
</div>
)
} else if (user.isStudent) {
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
        <NavDropdown.Item href ="/hartassessmentslink"> Leadership Survey </NavDropdown.Item>
</NavDropdown>
<NavDropdown title = "Other Assessments" id="basic-nav-dropdown">
        <NavDropdown.Item href ="/hartassessmentslink"> Survey 1</NavDropdown.Item>
        <NavDropdown.Item href ="/hartassessmentslink"> Survey 2</NavDropdown.Item>
</NavDropdown>
  <Nav.Link href ="studenthelpsme"> 
        My Leadership
  </Nav.Link>
  <Nav.Link href ="studenthelpsme"> 
        Career
  </Nav.Link>
  <Nav.Link href ="studenthelpsme"> 
        About
  </Nav.Link>
  <Nav.Link href ="studenthelpsme"> 
        Contact us
  </Nav.Link>

</Nav>
</Navbar>
{user.isAuthenticated ? (
                        <button
                            onClick={onLogout}
                            className='btn btn-warning mx-2'
                        >
                            Logout
                        </button>
                    ) : (
                        <></>
                    )}
</div>
    );
} else {
    return <div></div>
}

}

export default Navigation;
