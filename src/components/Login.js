import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Navbar from "./navbar";
import Axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailid: '',
      password: '',
      formErrors: { emailid: '', password: '' },
      emailidValid: false,
      passwordValid: false,
      formValid: false,
    };
  }
  componentDidMount(){

    this.roleBaseRendering();
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
    this.setState({ [e.target.name]: e.target.value })
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailidValid = this.state.emailidValid;
    let passwordValid = this.state.passwordValid;


    switch (fieldName) {  
      case "emailid":
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
        emailidValid: emailidValid,
        passwordValid: passwordValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailidValid && this.state.passwordValid,
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }
  onSubmit = (e) =>{
    e.preventDefault()

    const loginObject = {
        emailid: this.state.emailid,
        password: this.state.password
    };

    console.log("Hello", loginObject);

  Axios.post('http://localhost:8080/users/login', loginObject)
            .then((res) => {
                console.log(res.data)
                localStorage.setItem('token',res.data.token)
                localStorage.setItem('role',res.data.role)
                this.roleBaseRendering();
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ emailid: '', password:'' })
    }

    roleBaseRendering=(e) =>{

     const token= localStorage.getItem('token')
     const role= localStorage.getItem('role')

      if(role==='admin'){
        this.props.history.push('/product');
      }else if(role==='user'){
        this.props.history.push('/user');
      }else if(role==='manager'){
        this.props.history.push('/user');
      }
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
                 <h1>Login</h1>
                 <br />
                 
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
              <span className="errorMessage">{this.state.formErrors.emaild}</span>}
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
              Login
            </button>
        
          </div>
          </div>
          </form>
          </div>
      </div>
      </div>
      
    );
  }
}

export default Login;