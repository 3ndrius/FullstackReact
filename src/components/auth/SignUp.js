import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import {signUp}  from '../../store/actions/authActions'
class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }
    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
       this.props.signUp(this.state);
    }
  render() {
    const { auth, authError } = this.props;
    if(auth.uid) return <Redirect to='/' />
    return (
      <div className="container">
        <form className="pt-5 pb-5" onSubmit={this.handleSubmit} >
        <h2 className="text-center">Sign up </h2>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange} />
               
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} />
            </div> 

             <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input type="text" className="form-control" id="firstName" aria-describedby="firstName" placeholder="Enter name" onChange={this.handleChange} />
            </div> 

             <div className="form-group">
                <label htmlFor="exampleInputEmail1">LastName</label>
                <input type="text" className="form-control" id="lastName" aria-describedby="lastName" placeholder="Enter second-name" onChange={this.handleChange} />
            </div> 
            <button className="btn btn-primary" >Sign Up</button>           
        </form>
        {authError ? <p className="alert alert-danger">{authError} </p>: null }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
} 
const mapDispatchToProps = (dispatch) => {
    return{
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);