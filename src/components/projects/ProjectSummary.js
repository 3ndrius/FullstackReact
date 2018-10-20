import React from 'react'
import moment from 'moment';
export default ({project}) => {
  return (
        <div className="card border-primary mb-3">
        
        <div className="card-body">
            <h4 className="card-title">{project.title}</h4>
            <p className="card-text">{project.authorFirstName} {project.authorLastName}</p>
        </div>
        <div className="card-header">{moment(project.createdAt.toDate()).calendar()}</div>
        </div>
  )
}
