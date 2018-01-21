import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
class Header extends Component {

    renderLink() {
        const status = this.props.isAuthenticated;
        if (status != null && status) {
            return (
                <div>
                    <Link className="nav-item nav-link active" to="/feature">Feature
            </Link>
                    <Link className="nav-item nav-link active" to="/signout">SignOut
            </Link>
                </div>
            )
        }
        return (
            <div>
                <Link className="nav-item nav-link active" to="/signin">Signin
            </Link>
                <Link className="nav-item nav-link active" to="/signup">Signup
             </Link>
            </div>
        )


    }

    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <Link className="navbar-brand" to="/">Redux Auth</Link>

                <div className="navbar-nav">
                    {this.renderLink()}

                </div>

            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps, null)(Header);