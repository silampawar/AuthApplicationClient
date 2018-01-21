import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import * as actions from '../../actions'
import { connect } from 'react-redux';

class Signup extends Component {

    handleSubmitForm({ email, password, passwordConfirm }) {

        this.props.signUpUser({ email, password });

    }
    renderError() {
        if (this.props.errorMessage !== null &&
            this.props.errorMessage !== '') {
            return (
                <div className="alert alert-danger">Oh dear! {this.props.errorMessage}</div>
            )
        }

    }


    renderField({ input, label, type, meta: { touched, error } }) {
        return (
            <fieldset className="form-group">
                <label>{label}</label>

                <input {...input} placeholder={label} type={type} className="form-control" />
                <div> {touched && error && <div className="alert alert-danger">
                    {error} </div>}</div>

            </fieldset>
        )
    };

    render() {
        const { handleSubmit, fields: { email, password, passwordConfirm } } = this.props;
        return (
            <div className="container">
                <div className="wrapper">
                    <form onSubmit={handleSubmit(this.handleSubmitForm.bind(this))} className="form-signin">
                        <h3 className="form-signin-heading">Please fill in below details to Sign up</h3>
                        <hr className="colorgraph" />

                        <Field component={this.renderField} type="email" name="email" label="Email" />
                        <Field component={this.renderField} type="password" name="password" label="Password" />
                        <Field component={this.renderField} type="password" name="passwordConfirm" label="Confirm Password" />
                        {this.renderError()}
                        <button className="btn btn-lg btn-primary btn-block" name="Submit" value="Signup" type="Submit">Signup</button>

                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error
    }
}

function validate(formProps) {

    const errors = {};
    if (!formProps.email) {
        errors.email = 'Please enter email';
    }
    if (!formProps.password) {
        errors.password = 'Please enter password';
    }
    if (!formProps.passwordConfirm) {
        errors.passwordConfirm = 'Please confirm password';
    }
    if (formProps.password !== formProps.passwordConfirm) {

        errors.passwordConfirm = 'Password does not match';
    }
    return errors;
}

export default reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm'],
    validate
})(
    connect(mapStateToProps, actions)(Signup)
    );