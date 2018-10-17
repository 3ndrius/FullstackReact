import React from 'react'
import { Link } from 'react-router-dom'
import ProjectSummary from './ProjectSummary';
export default ({projects}) => {
  return (
    <div className="project-list section mt-5">
        {
          projects && projects.map(project => {
            return (
              <Link to={'/project/' + project.id} key={project.id}>
              <ProjectSummary project={project}  />
              </Link>
            )
          })
        }
        
    </div>
  )
}
