import React, { Fragment, useState } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';

import PropTypes from 'prop-types';
// import API from "../Utils/API";

// For testint API Route
// function loadItems() {
//     API.getInventoryItems()
//         .then(res =>
//             console.log(res.data)
//         )
// }

//import axios from 'axios';

const RegisterForm = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = event => setFormData({ ...formData, [event.target.name]: event.target.value });

    const onSubmit = async event => {
        event.preventDefault();
        if (password !== password2) {
            setAlert('Passwords do not match', 'danger');

        } else {
            //console.log(formData);
            register({ name, email, password });
            // const newUser = { //testing request - works!
            //     name,
            //     email,
            //     password
            // }

            // try {
            //     const config = {
            //         headers: {
            //             'Content-Type': 'Application/json'
            //         }
            //     }
            //     const body = JSON.stringify(newUser);

            //     const res = await axios.post('/api/users', body, config);
            //     console.log(res.data);
            // } catch (err) {
            //     console.error(err.response.data);

            // }
        }
    }

    //Redirect if logged in
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />
    }
    return (
        <Fragment>
            <section className="container col-md-12" id="registerForm">
                <h1 className="large">Register</h1>
                <p className="lead registerTitle"><i className="fas fa-user"></i> Create Your Account</p>
                <form className="form" onSubmit={event => onSubmit(event)}>
                    <div class="form-group col-md-8">

                        <input className="form-control" type="text" placeholder="Name" name="name" value={name} onChange={event => onChange(event)} />
                    </div>

                    <div class="form-group col-md-8">


                        <input className="form-control" id="inputEmail3" type="email" placeholder="Email Address" name="email" value={email} onChange={event => onChange(event)} />
                    </div>
                    {/* <small className="form-text"
                        >(This site uses Gravatar so if you want a profile image, use a
            Gravatar email)</small
                        > */}

                    <div class="form-group col-md-8">
                        <input className="form-control"

                            type="password"
                            placeholder="Password"
                            value={password} onChange={event => onChange(event)}
                            name="password"
                        // minLength="6"
                        />
                    </div>
                    <div class="form-group col-md-8">
                        <input className="form-control"
                            type="password"
                            placeholder="Confirm Password"
                            name="password2"
                            value={password2} onChange={event => onChange(event)}
                        // minLength="6"
                        />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Register" />
                </form>
                <p className="subtext" style={{ textAlign: 'center' }}>
                    Already have an account? <a href="/login">Sign In</a>
                </p>
                {/* <button onClick={loadItems}>API TEST</button> */}

            </section>

        </Fragment >





    );
};

RegisterForm.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(RegisterForm); //in connect, takes 2 params. State, object with actions: allows access to props.setAlert