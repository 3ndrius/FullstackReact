import React from 'react'
import { NavLink } from 'react-router-dom';
import {connect } from 'react-redux'
import {signOut } from '../../store/actions/authActions'
const SignnedInLink = (props) => {

  return (
    <div>
     <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink to='/create' className="nav-link" >New Project </NavLink>
      </li>

      <li className="nav-item active">
        <a onClick={props.signOut} className="nav-link" >Log Out </a>
      </li>

      <li className="nav-item active">
        <NavLink to='/' className="nav-link" > <span className="badge badge-pill badge-warning">JS</span></NavLink>
      </li>   
    </ul>

    </div>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}
export default connect(null, mapDispatchToProps) (SignnedInLink);
