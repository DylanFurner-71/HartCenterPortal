import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { setCurrentUser, logoutUser } from './actions/authActions';
import jwt_decode from 'jwt-decode';
import PrivateRoute from './components/PrivateRoute';
import Navigation from './components/navigation';
import Landing from './components/landing';
import setAuthToken from './utils/setAuthToken';
import Login from './components/Login';
import store from './store';
import { ROUTES } from './routes';
import 'bootstrap/dist/css/bootstrap.css';

// Check for token to keep user logged in
if (localStorage.getItem('accessToken')) {
    // Set auth token header auth
    // logoutUser();
    const token = localStorage.getItem("accessToken");
    setAuthToken(token);
    // Decode token and get user info and exp
     const decoded = jwt_decode(token);
    // // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (token.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        //Redirect to login
        window.location.href = '/login/';
    }
}

function App() {
    return (
        <>
        <Provider store={store}>
            <div className='App'>
                <Router>
                <Navigation />
                <div>
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/home' component={Landing} />
                  <Route exact path='/login/' component={Login} />
                    <Switch>
                        {ROUTES.map((route, i) => (
                            <PrivateRoute exact key={i} {...route} />
                        ))}
                    </Switch>
                    </div>
                </Router>
            </div>
        </Provider>
        </>
    );
}

export default App;
