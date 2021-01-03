import Axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Register.css";
import { Navbar } from 'reactstrap';

export default class addInvestor extends Component {

    constructor(props) {
        super(props)

        this.onChangeInvestorName = this.onChangeInvestorName.bind(this);
        //this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            iname: ''
        }
    }

    onChangeInvestorName(e) {
        this.setState({ iname: e.target.value })
    }
    
    onSubmit(e) {
        e.preventDefault()

        const investorObject = {
            iname: this.state.iname
        };

        Axios.post('http://localhost:8080/investor', investorObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ iname: '' })
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
                        <Link class="nav-link" to="/add investor">Add Investor</Link>
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
                        <h1>Add Investor</h1>
                        <br />
                            <div class="col">
                            <input type="text" class="form-control"  name="iname" value={this.state.iname} onChange={this.onChangeInvestorName} placeholder="Investor Name"/>
                            </div>
                            <br />
                        </div> 
                        <button type="submit">Add</button>
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
