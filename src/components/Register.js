import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';
import "./Register.css";
import Navbar from "./navbar";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      emailId: '',
      password: '',
      formErrors: { firstname:'', lastname: '', emailid: '', password: '' },
      firstnameValid: false,
      lastnameValid: false,
      emailidValid: false,
      passwordValid: false,
      formValid: false,
    };
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let firstnameValid = this.state.firstnameValid;
    let lastnameValid = this.state.lastnameValid;
    let emailidValid = this.state.emailidValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {

      case "firstname":
        firstnameValid = (value.match(/^\S*$/i), value.length <= 8);
        fieldValidationErrors.firstname = firstnameValid ? "" : "first name is invalid";
        break;
      case "lastname":
          lastnameValid = (value.match(/^\S*$/i), value.length <= 10);
          fieldValidationErrors.lastname = lastnameValid ? "" : "last name is invalid";
          break;  
      case "emailId":
        emailidValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.emailid = emailidValid ? "" : "emailid is invalid";
        break;
      case "password":
        passwordValid = value.length >= 7;
        fieldValidationErrors.password = passwordValid ? ""
          : "password should contain min 7 characters";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        firstnameValid: firstnameValid,
        lastnameValid: lastnameValid,
        emailidValid: emailidValid,
        passwordValid: passwordValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.firstnameValid && this.state.lastnameValid && this.state.emailidValid && this.state.passwordValid,
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }
  onSubmit = (e) =>{
    e.preventDefault()

    const registerObject = {
        emailid: this.state.emailid,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        password: this.state.password
    };

    console.log("Hello", registerObject);

  Axios.post('http://localhost:8080/users/register', registerObject)
            .then((res) => {
                console.log(res.data);
                alert(res.data.message);
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ emailid: '', firstname: '', lastname: '', password:'' })
    }

  render() {
    return (
      <div>
        <Navbar/>
        <div className="formDiv">
        
      <div>
        <nav>
          <Link to="#">
          </Link>
         
        </nav>
        
        
        <form onSubmit={this.onSubmit}>
        <div className="container mt-2">
               <div className="form-group text-center">
                 <h1>Register</h1>
                 <br />
                <input
                type="firstname"
                required
                className="form-control"
                name="firstname"
                placeholder="First Name"
                value={this.state.firstname}
                onChange={this.handleUserInput}
              />
              {this.state.formErrors.firstname.length>0 && 
              <span className="errorMessage">{this.state.formErrors.firstname}</span>}
                </div>

                <div className="form-group text-center">
                <input
                type="lastname"
                required
                className="form-control"
                name="lastname"
                placeholder="Last Name"
                value={this.state.lastname}
                onChange={this.handleUserInput}
              />
              {this.state.formErrors.lastname.length>0 && 
              <span className="errorMessage">{this.state.formErrors.lastname}</span>}
                </div>

                <div className="form-group text-center">
                <input
                type="emailid"
                required
                className="form-control"
                name="emailid"
                placeholder="Emailid"
                value={this.state.emailid}
                onChange={this.handleUserInput}
              />
              {this.state.formErrors.emailid.length>0 && 
              <span className="errorMessage">{this.state.formErrors.emailid}</span>}
                </div>
                <div className="form-group text-center">
                    
                    <input
                    type="password"
                    name="password"
                   required
                   className="form-control"
                   placeholder="Password"
                   value={this.state.password}
                  onChange={this.handleUserInput}
              />
              {this.state.formErrors.password.length>0 && 
              <span className="errorMessage">{this.state.formErrors.password}</span>}
                </div>
            <button
              type="submit"
              id="btn1"
              class="btn btn-dark"
           
            >
              Register
            </button>

          </div>
            </form>
      </div>
      </div>
      </div>
    );
  }
}

export default Register;