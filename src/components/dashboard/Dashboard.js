import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notification from './Notification'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


class Dashboard extends Component {

    render() {
        const {projects, auth} = this.props;

        if(!auth.uid) return <Redirect to='/signin' />
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
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(Dashboard);
