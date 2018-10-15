import React, { Component } from 'react';

import Notification from './Notification';
import ProjectList from '../projects/ProjectList';

import { connect } from 'react-redux'

class Dashboard extends Component {

    render() {
        const {projects} = this.props;

        console.log(this.props);
        return (
            <div className="dashboard container"> 
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col-md-offset-1 mt-5 col-sm-12 col-md-5">
                    <Notification />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard);
