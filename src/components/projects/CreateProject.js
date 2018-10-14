import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
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
        <form className="pt-5 pb-5" onSubmit={this.handleSubmit} >
        <h2 className="text-center">Create project </h2>
            <div className="form-group">
                <label htmlFor="title">Project name</label>
                <input type="text" className="form-control" id="title" aria-describedby="titleHelp" placeholder="EnterTitle" onChange={this.handleChange} />
               
            </div>
            <div className="form-group">
      <label htmlFor="content">Content</label>
      <textarea className="form-control" id="content" rows="5"></textarea>
    </div>
            <button className="btn btn-primary">Create</button>           
        </form>
      </div>
    )
  }
}
export default CreateProject;