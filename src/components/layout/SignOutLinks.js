import React from 'react'
import { NavLink } from 'react-router-dom';
export default () => {
  return (
    <div>
     <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <NavLink to='/' class="nav-link" >SignUp </NavLink>
      </li>

      <li class="nav-item active">
        <NavLink to='/' class="nav-link" > Login </NavLink>
      </li>

    </ul>

    </div>
  )
}
