import React from 'react'
import { NavLink } from 'react-router-dom';
export default () => {
  return (
    <div>
     <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink to='/signup' className="nav-link" >SignUp </NavLink>
      </li>

      <li className="nav-item active">
        <NavLink to='/signin' className="nav-link" > Login </NavLink>
      </li>

    </ul>

    </div>
  )
}
