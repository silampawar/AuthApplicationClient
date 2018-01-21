import React, { Component } from 'react';
import Header from './Header.js'
import {connect} from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
    componentWillMount(){
        this.props.FetchMessage();
    }
  render() {
    return (
      <div className = "container">
	      <div className="wrapper">
		      <form  className="form-signin">  
            <h3 className="form-signin-heading">Features</h3>
            <hr className="colorgraph"/>
            <h3 className="form-signin-subheading">This is a protected page!!</h3>
			    </form>			
	      </div>
    </div>
    );
  }
}

export default connect(null,actions)(Feature);

