import React, { Component } from 'react';

import Notification from './Notification';
import ProjectList from '../projects/ProjectList';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container"> 
                <div className="row">
                    <div className="col-sm-12 col-md-6 mt-5">
                        <ProjectList />
                    </div>
                    <div className="col-md-offset-1 mt-5 col-sm-12 col-md-5">
                    <Notification />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
