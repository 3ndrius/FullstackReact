import React from 'react'
import { NavLink } from 'react-router-dom';
export default () => {
  return (
    <div>
     <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink to='/' className="nav-link" >New Project </NavLink>
      </li>

      <li className="nav-item active">
        <NavLink to='/' className="nav-link" >Log Out </NavLink>
      </li>

      <li className="nav-item active">
        <NavLink to='/' className="nav-link" > <span className="badge badge-pill badge-warning">JS</span></NavLink>
      </li>   
    </ul>

    </div>
  )
}
