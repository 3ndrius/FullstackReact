import React from 'react'
import { Link } from 'react-router-dom'

import SignedInLinks from './SignedInLink';
import SignOutLinks from './SignOutLinks';

export default () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
    <Link to='/' className="navbar-brand">Project</Link>
    <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
        
        </ul>
        <SignOutLinks />
        <SignedInLinks />
    </div>
    </div>
    </nav>
  )
}
