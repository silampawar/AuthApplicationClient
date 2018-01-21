import React, { Component } from 'react';
import Header from './Header.js';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class Feature extends Component {

  renderDetails(){
    if(this.props.isAuthenticated){
      return(
        <div><h3 className="form-signin-subheading">You are already signed in, would you like to signout?</h3>
			  <Link className="btn btn-lg btn-primary btn-block" to="/signout">Signout</Link>  			
		    <h3 className="form-signin-subheading">Or access Features page?</h3>
        <Link className="btn btn-lg btn-primary btn-block" to="/feature">Features</Link> 
			  
         </div>
      );
    }else{
      <div><h3 className="form-signin-subheading">What would you like to do?</h3>
			  <Link className="btn btn-lg btn-primary btn-block" to="/signin">Signin</Link>
        <Link className="btn btn-lg btn-primary btn-block" to="/signin">Singup</Link>  			
		     </div>
    }
  }

  render() {
    return (
      <div className = "container">
	      <div className="wrapper">
		      <form  className="form-signin">  
            <h3 className="form-signin-heading">Welcome to the Auth appplication!</h3>
			      <hr className="colorgraph"/>
			      {this.renderDetails()}	  
			    </form>			
	      </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      isAuthenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, null)(Feature);