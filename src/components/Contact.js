import React, { Component } from "react";
//import { Navbar } from "reactstrap";
import { Link } from "react-router-dom";
import Navbar from './navbar';
import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  render() {
    return(
      <div>
        <Navbar />
        <div className="formDiv">
        
        <div>
          <nav>
            <Link to="#">
            </Link>
           
          </nav>
          
          
          <form onSubmit={this.onSubmit}>
          <div className="container mt-2">
                 <div className="form-group text-center">
                   <h1>Contact</h1>
                   <br />
                   <div className="form-group text-center">
                   <label htmlFor="message">Name</label>
                  <input
                  type="name"
                  required
                  className="form-control"
                  name="Name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleUserInput}
                />
                  </div>
                  <div className="form-group text-center">
                  <label htmlFor="message">EmailId</label>
                  <input
                  type="emailid"
                  required
                  className="form-control"
                  name="emailid"
                  placeholder="Emailid"
                  value={this.state.emailid}
                  onChange={this.handleUserInput}
                />
                  </div>
                 <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
      
              <button
                type="submit"
                id="btn1"
                class="btn btn-dark"
  
              >
                Submit
              </button>
          
            </div>
            </form>
            </div>
        </div>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit(event) {
  }
}

export default Contact;