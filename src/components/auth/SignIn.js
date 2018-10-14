import React, { Component } from 'react'

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
        console.log(this.state);
    }
  render() {
    return (
      <div className="container">
        <form className="p-5" onSubmit={this.handleSubmit} >
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
      </div>
    )
  }
}
export default SignIn;