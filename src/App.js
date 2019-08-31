import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './store/actions/auth';

import './App.css';
import Main from './Main/Main';
import Auth from './Main/Auth';

class App extends Component {

  componentDidMount() {
    this.props.onTryAuthSignup();
  }

  render() {

    let routesAre = (
      <Auth />
    );

    if(this.props.isAuth) {
      routesAre = (
        <Main />
      );
    }

    return (
      <BrowserRouter basename="/software">
        <div className="App">
          {routesAre}
        </div>
      </BrowserRouter>
    );
  
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.token !== null
  };
};

const mapDispatchToProps = dispatch => {
 return {
   onTryAuthSignup: () => dispatch(actions.authCheckState())
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
