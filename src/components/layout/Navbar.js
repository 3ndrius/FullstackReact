import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLink from './SignedInLink'
import SignOutLinks from './SignOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const {auth, profile} = props;
    const links = auth.uid ? <SignedInLink profile={profile}/> : <SignOutLinks />
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
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
export default connect(mapStateToProps) (Navbar);