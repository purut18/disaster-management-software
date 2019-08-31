import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../store/actions/auth';
import Header from '../containers/Header';
import SideContent from '../containers/sideContent';

class Main extends Component {

  render() {
    return (
        <div>
          <Header />
          <SideContent />
       </div>
    );
  
  }
}

export default Main;
