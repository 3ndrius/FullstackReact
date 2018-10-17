import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(this.state);
        this.props.signIn(this.state);
    }
  render() {
      const { authError } = this.props;
    return (
      <div className="container">
        <form className="pt-5 pb-5" onSubmit={this.handleSubmit} >
        <h2 className="text-center">Sign in </h2>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange} />
               
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} />
            </div>  
            <button className="btn btn-primary" >Login</button>           
        </form>
       
            {authError ?  <p className="alert alert-danger"> {authError} </p> : null}
        
      </div>
    )
  }
}

const mapStateToProps = (state ) => {
    return {
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch ) => {

return {
    signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SignIn);