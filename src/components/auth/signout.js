import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {Link} from 'react-router';

class SignOut extends Component{

    componentWillMount(){
        this.props.SignOut();
    }
    render(){
        return (<div className = "container">
	      <div className="wrapper">
		      <form  className="form-signin">  
            <h3 className="form-signin-heading">You have signed out successfully!</h3>
            <hr className="colorgraph"/>
                  <h3 className="form-signin-subheading">Do you want to signin again?</h3> 
                  <Link className="btn btn-lg btn-primary btn-block" to="/signin">Signin</Link>    	  
			    </form>			
	      </div>
    </div>)
    }
}

export default connect(null, actions)(SignOut);