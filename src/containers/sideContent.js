import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import './sideContent.css';
import TopHeader from '../components/sideContent/TopHeader';
import Dashboard from '../components/sideContent/sideWrappers/Dashboard';
import TasksComp from '../components/sideContent/sideWrappers/TasksComp';
import Organisations from '../components/sideContent/sideWrappers/Organisations';
import NoPageFound from '../components/sideContent/NoPageFound';
import Staff from '../components/sideContent/sideWrappers/Staff';
import Resources from '../components/sideContent/sideWrappers/Resources';

class SideContent extends Component {

    render() {
        return(
            <div className="sideContent">
                <TopHeader />
                <div className="sideWrapper">
                    <Switch>
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/tasks" exact component={TasksComp} />
                        <Route path="/organisations" exact component={Organisations} />
                        <Route path="/staff" exact component={Staff} />
                        <Route path="/resources" exact component={Resources} />
                        <Route component={NoPageFound} />
                    </Switch>
                </div>
            </div>    
        );
    }
}

export default SideContent;