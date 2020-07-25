import React, { Fragment, useState } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';



const LoginForm = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = event => setFormData({ ...formData, [event.target.name]: event.target.value });

    const onSubmit = async event => {
        event.preventDefault();

        //console.log(formData);
        //console.log('SUCCESS')
        login(email, password);

    };

    //Redirect if logged in
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />
    }

    return (
        <Fragment>

            <section className="container" id="loginForm">
                <h1 className="large">Sign In</h1>
                <p className="lead registerTitle"><i className="fas fa-user"></i> Sign Into Your Account</p>

                <form className="form loginForm" onSubmit={event => onSubmit(event)}>

                    <div class="form-group col-md-8 mt-7" >
                        <input className="form-control" type="email" placeholder="Email Address" name="email" value={email} onChange={event => onChange(event)} required />
                    </div>
                    <div class="form-group col-md-8">
                        <input className="form-control"
                            type="password"
                            placeholder="Password"
                            value={password} onChange={event => onChange(event)}
                            name="password"
                            minLength="6"
                        />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Submit" />
                </form>
                <p className="subtext" style={{ textAlign: "center" }} >
                    Don't have an account? <a href="/register">Register Here</a>
                </p>
            </section>




        </Fragment>





    );
}

LoginForm.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(LoginForm);