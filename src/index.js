import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app';
import reducers from './reducers';
import Signin from './components/auth/signin';
import reduxThunk from 'redux-thunk';
import SignOut from './components/auth/signout';
import SignUp from './components/auth/signup';
import Feature from './components/feature';
import RequireAuth from './components/require_authorisation.js';
import Welcome from './components/welcome.js';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
if(token){
  store.dispatch({type:'AUTH_USER'});
}
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
      <IndexRoute component={Welcome} />
        <Route path="signin" component={Signin} />
        <Route path="signout" component={SignOut} />
        <Route path="signup" component={SignUp} />
        <Route path="feature" component={RequireAuth(Feature)} />
        </Route>
    </Router>
  </Provider>
  , document.querySelector('.app1'));
