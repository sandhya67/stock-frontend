import Axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Register.css";
import { Navbar } from 'reactstrap';

export default class Purchase extends Component {

    constructor(props) {
        super(props)

        this.onChangeSaleName = this.onChangeSaleName.bind(this);
        this.onChangeSalePrice = this.onChangeSalePrice.bind(this);
        this.onChangeSaleQuantity = this.onChangeSaleQuantity.bind(this);
        
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: '',
            name: '',
            price:'',
            quantity:''
        }
    }

    onChangeSaleName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeSalePrice(e) {
        this.setState({ price: e.target.value })
    }
    onChangeSaleQuantity(e) {
        this.setState({ quantity: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const saleObject = {
            name: this.state.name,
            price: this.state.price,
            quantity: this.state.quantity
        };

        Axios.post('http://localhost:8080/sale', saleObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ name: '', price:'', quantity:'' })
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
                        <Link class="nav-link" to="/add sale">Add Sale</Link>
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
                        <h1>Sale Products</h1>
                            <br />
                            <div class="col">
                            <input type="text" class="form-control"  name="name" value={this.state.name} onChange={this.onChangeSaleName} placeholder="Sale Name"/>
                            </div>
                            <br />
                            <div class="col">
                            <input type="text" class="form-control" name="price" value={this.state.price} onChange={this.onChangeSalePrice} placeholder="Sale Price"/>
                            </div>
                            <br />
                            <div class="col">
                            <input type="text" class="form-control" name="quantity" value={this.state.quantity} onChange={this.onChangeSaleQuantity} placeholder="Sale Quantity"/>
                            </div>
                            <br />
                        </div> 
                        <button type="submit">submit</button>
                        </div>
                        </div>
                        </form>
                        </div>
                    </div>
                </div>
                </div>
    )
}
}




