import Axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Register.css";

export default class UpdateCompany extends Component {

    constructor(props) {
        super(props)

        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        
        
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            cname: ''
        
        }
    }

    componentDidMount(){
        Axios.get("http://localhost:8080/company" + this.props.match.params.cid)
        .then(res => {
            this.setState({
                cname: res.data.company[0].cname
                
            });
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    onChangeCompanyName(e) {
        this.setState({ cname: e.target.value })
    }
    
    onSubmit(e) {
        e.preventDefault()

        const companyObject = {
            cname: this.state.cname
        };

        Axios.put('http://localhost:8080/company/' +this.props.match.params.cid, companyObject)
            .then((res) => {
                console.log(res.data.company)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({  cname: '' })
        this.props.history.push('/company')
    }
    

    render() {
    return (       
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success text-white">
                  <Link class="navbar-brand" to="#"><b>Stocks</b></Link>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
 
                      <li class="nav-item active">
                        <Link class="nav-link" to="/update company">Update Company</Link>
                      </li>
                    </ul>

                  </div>
                </nav>
                    <div className="formDiv">
                        <div>
                        <form onSubmit={this.onSubmit}>
                        <div className="container mt-2">
                        <div className="form-group text-center">  
                        <div action="">
                        <h1>Update Company</h1>
                        <br />   
                       
                            <div class="col">
                            <input type="text" class="form-control"  name="cname" value={this.state.cname} onChange={this.onChangeCompanyName} placeholder="Company Name"/>
                            </div>
                            <br />
                            {/* <div class="col">
                            <input type="text" class="form-control" name="price" value={this.state.price} onChange={this.onChangeProductPrice} placeholder="Product Price"/>
                            </div> */}
                        </div> 
                        <button type="submit">Update</button>
                        </div>
                        </div>
                        </form>
                        </div>
                    </div>
                    </div>
                
    )
}
}