import React from 'react'
import { Link } from 'react-router-dom'

import SignedInLinks from './SignedInLink';
import SignOutLinks from './SignOutLinks';
import { connect } from 'react-redux'

const Navbar = (props) => {
    const {auth} = props;
    const links = auth.uid ? <SignedInLinks /> : <SignOutLinks />
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
    <Link to='/' className="navbar-brand">Project</Link>
    <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
        
        </ul>
        {links}
    </div>
    </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps) (Navbar);