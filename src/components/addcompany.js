import Axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Register.css";
import { Navbar } from 'reactstrap';

export default class AddCompany extends Component {

    constructor(props) {
        super(props)

        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            cname: '', 
        }
    }

    onChangeCompanyName(e) {
        this.setState({ cname: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const companyObject = {
            cname: this.state.cname
        };

        Axios.post('http://localhost:8080/company', companyObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ cname: '' })
    }

    render() {
    return (
        <div>
            <Navbar /> 
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success text-white">
                  <Link class="navbar-brand" to="#"><b>Stocks</b></Link>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
 
                      <li class="nav-item active">
                        <Link class="nav-link" to="/add company">Add Company</Link>
                      </li>
                    </ul>

                  </div>
                </nav>
            <div className="formDiv">                  
                    <div>
                        <div>
                        <form onSubmit={this.onSubmit}>
                        <div className="container mt-2">
                        <div className="form-group text-center">  
                        <div action="">
                        <h1>Add Company</h1>
                        <br />
                            <div class="col">
                            <input type="text" class="form-control"  name="cname" value={this.state.cname} onChange={this.onChangeCompanyName} placeholder="Company Name"/>
                            </div>
                            <br /> 
                        <button type="submit">submit</button>
                        </div>
                        </div>
                        </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
    )
}
}
