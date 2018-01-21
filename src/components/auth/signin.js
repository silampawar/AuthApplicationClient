import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import * as actions from '../../actions'
import { connect } from 'react-redux';

class Signin extends Component {

    handleSubmitForm({ email, password }) {

        this.props.signInUser({ email, password });
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

    renderSigninForm() {
        if (this.props.isAuthenticated) {
            return (<div>
                <h3 className="form-signin-heading">Welcome Back! You have arealdy signed in</h3>
                <hr className="colorgraph" />
            </div>
            )
        } else {
            return (<div>
                <h3 className="form-signin-heading">Welcome Back! Please Sign In</h3>
                <hr className="colorgraph" />

                <Field component={this.renderField} type="email" name="email" label="Email" className="form-control" />
                <Field component={this.renderField} type="password" name="password" label="Password" className="form-control" />
                {this.renderError()}
                <button className="btn btn-lg btn-primary btn-block" name="Submit" value="Login" type="Submit">Login</button>
            </div>
            );
        }

    }

    render() {
        const { handleSubmit, fields: { email, password } } = this.props;
        return (

            <div className="container">
                <div className="wrapper">
                    <form onSubmit={handleSubmit(this.handleSubmitForm.bind(this))} className="form-signin">
                        {this.renderSigninForm()}
                    </form>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error,
        isAuthenticated: state.auth.authenticated
    }
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(
    connect(mapStateToProps, actions)(Signin)
    );