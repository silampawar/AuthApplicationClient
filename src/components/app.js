import React, { Component } from 'react';
import Header from './Header.js'
import Footer from './Footer.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <div><Header/></div>
       <div>{this.props.children}</div>
       <div><Footer/></div>
       </div>
    );
  }
}
