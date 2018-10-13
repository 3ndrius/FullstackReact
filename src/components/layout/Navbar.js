import React from 'react'
import { Link } from 'react-router-dom'

import SignedInLinks from './SignedInLink';
import SignOutLinks from './SignOutLinks';

export default () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
    <a class="navbar-brand" href="#">Project</a>
    <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
        
        </ul>
        <SignOutLinks />
        <SignedInLinks />
    </div>
    </div>
    </nav>
  )
}
