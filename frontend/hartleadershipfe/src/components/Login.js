

import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classnames from "classnames";
import { HartPrefix } from "../prefixes/hart";
// import "../register/register.css"
// import RegisterPopup from "../register/registerPopup";
import {login} from "../actions/authActions";
class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            modalShow: false,
            error: {},
            loggedIn: {},
            user: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.state.user.accessToken) {
            console.log("poops", this.props);
            if (this.state.user.info.isStudent === false){
            this.props.history.push(`/admin/home/}`); // push user to dashboard when they login
            } else {
                // this.props.history.push(`/student/home/smu_id=${this.props.auth.user.smu_id}`);
                this.props.history.push(`/student/home/`);
            }
        }
    }
    onChange = e => {
        this.setState({[e.target.id]: e.target.value}); //probbably change to smu_id
    };
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            smu_email: this.state.email,
            smu_id: this.state.password,
        };
        try {
            const t =  login(userData, this.props.history).then((result) => {return result}).then(t => {
                this.setState({user: t})
                console.log("user", this.state.user);
                if (this.state.user.user.isStudent == true){
                this.props.history.push(`/student/home`); 
            } else {
                this.props.history.push(`/admin/home`)} 
        }) 
            
        //     console.log("tttt", t);
        //   if (t) { 
        //         this.setState({user: t})
        //         console.log("user", this.state.user);
        //         if (this.state.user.isStudent == true){
        //         this.props.history.push(`/student/home`)} 
        //     } else {
        //         this.props.history.push(`/admin/home`)} 
        } catch (e){
            console.log(e);
        }
               // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    };

    render() {
        const error = this.state.error;
        return (
            <div className="container" style={{marginTop: "1%"}}>
                                <h5 className="card-title text-center">Login</h5>
                                <form className="form-signin" onSubmit={this.onSubmit}>
                                    <span className="text-danger">
                                            {error.error}</span>
                                            <div className="form-label-group">
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.email}
                                            id="email"
                                            type="text"
                                            className={classnames("form-control", {
                                                invalid: error.email || error.emailnotfound
                                            })}
                                        />
                                        <label htmlFor="email">Email</label>
                                    </div>

                                    <div className="form-label-group">
                                        <label htmlFor="password">Password/ as of now actually smu_id</label>
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.password}
                                            id="password"
                                            type="password"
                                            className={classnames("form-control", {
                                                invalid: error.password || error.passwordincorrect
                                            })}
                                        />
                                    </div> 
                                    <hr/>
                                        <button
                                    type="button"
                                    className="btn btn-lg btn-primary btn-block text-uppercase"
                                    onClick={this.onSubmit}
                                >
                                    Login
                                </button>
                                </form>
                            </div>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    error: state.error
});
export default connect(
    mapStateToProps,
    null
)(Login);