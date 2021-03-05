

import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../actions/authActions";
import classnames from "classnames";
// import "../register/register.css"
// import RegisterPopup from "../register/registerPopup";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            modalShow: false,
            error: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            if (this.state.isAdmin === true){
            this.props.history.push(`/admin/adminLanding/}`); // push user to dashboard when they login
            } else {
                this.props.history.push(`/userLanding/smu_id=${this.props.auth.user.smu_id}`);
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            console.log(nextProps.auth);
            if (this.state.isStylist === true){
            this.props.history.push(`/admin/adminLanding/`); // push user to dashboard when they login
            } else {
                this.props.history.push(`/userLanding/smu_id=${this.props.auth.user.smu_id}`);
            }
        }
        if (nextProps.error) {
            this.setState({
                error: nextProps.error
            });
        }
    }
    onCheck = e => {
        if (this.state.isStylist === false){
        this.setState(({isStylist: true}));
        } else {
            this.setState(({isStylist: false}));
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
        this.props.login(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    };

    render() {
        const error = this.state.error;
        console.log(error.error)
        return (
            <div className="container">
                                <h5 className="card-title text-center">Login</h5>
                                <form className="form-signin" onSubmit={this.onSubmit}>
                                    <span className="text-danger">
                                            {error.error}</span>
                                    <div className="form-label-group">
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.email}
                                            id="email"
                                            type="email"
                                            className={classnames("form-control", {
                                                invalid: error.email || error.emailnotfound
                                            })}
                                        />
                                        <label htmlFor="email">SMU Email</label>
                                    </div>

                                    <div className="form-label-group">
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.password}
                                            id="password"
                                            type="password"
                                            className={classnames("form-control", {
                                                invalid: error.password || error.passwordincorrect
                                            })}
                                        />
                                        <label htmlFor="password">Password/ as of now actually smu_id</label>
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
    {login}
)(Login);