import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createProject } from './../../store/actions/projectActions';
import { Redirect } from 'react-router-dom'
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
        console.log();
        this.props.createProject(this.state);
    }
  render() {
      const {auth} = this.props;
      if(!auth.uid) return <Redirect to='/signin' />
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
      <textarea className="form-control" id="content" rows="5" onChange={this.handleChange}></textarea>
    </div>
            <button className="btn btn-primary">Create</button>           
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
   
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);