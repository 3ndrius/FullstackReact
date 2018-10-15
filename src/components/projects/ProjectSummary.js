import React from 'react'

export default ({project}) => {
  return (
        <div className="card border-primary mb-3">
        
        <div className="card-body">
            <h4 className="card-title">{project.title}</h4>
            <p className="card-text">Posted by NetAnonim</p>
        </div>
        <div className="card-header">15 July 2018</div>
        </div>
  )
}
