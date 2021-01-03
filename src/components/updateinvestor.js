import Axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Register.css";

export default class updateInvestor extends Component {

    constructor(props) {
        super(props)

        this.onChangeInvestorName = this.onChangeInvestorName.bind(this);
        //this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            iname: '',
        }
    }

    componentDidMount(){
        Axios.get("http://localhost:8080/investor" + this.props.match.params.id)
        .then(res => {
            this.setState({
                iname: res.data.investor[0].iname
            });
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    onChangeInvestorName(e) {
        this.setState({ iname: e.target.value })
    }
    
    onSubmit(e) {
        e.preventDefault()

        const investorObject = {
            iname: this.state.iname
        };

        Axios.put('http://localhost:8080/investor/' +this.props.match.params.id, investorObject)
            .then((res) => {
                console.log(res.data.investor)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({  iname: '' })
        this.props.history.push('/investor')
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
                        <Link class="nav-link" to="/Update Investor">Update Investor</Link>
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
                        <h1>Update Investor</h1>
                        <br />   
                            <div class="col">
                            <input type="text" class="form-control"  name="iname" value={this.state.iname} onChange={this.onChangeInvestorName} placeholder="Investor Name"/>
                            </div>
                            <br />
                            {/* <div class="col">
                            <input type="text" class="form-control" name="price" value={this.state.price} onChange={this.onChangeProductPrice} placeholder="Product Price"/>
                            </div> */}
                        <button type="submit">Update</button>
                        </div>
                        </div>
                        </div>
                        </form>
                        </div>
                    </div>
                    </div>
                
 
    )
}
}