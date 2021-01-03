import Axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./Register.css";
import { Navbar } from 'reactstrap';

export default class AddProduct extends Component {

    constructor(props) {
        super(props)

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onChangeProductQuantity = this.onChangeProductQuantity.bind(this);
        
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            pname: '',
            price:'',
            quantity:''
        }
    }

    onChangeProductName(e) {
        this.setState({ pname: e.target.value })
    }
    onChangeProductPrice(e) {
        this.setState({ price: e.target.value })
    }
    onChangeProductQuantity(e) {
        this.setState({ quantity: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const productObject = {
            pname: this.state.pname,
            price: this.state.price,
            quantity: this.state.quantity
        };

        Axios.post('http://localhost:8080/product', productObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ pname: '', price:'', quantity:'' })
    }

    render() {
    return (
        <div>
            <div> 
            <nav className="navbar navbar-expand-lg navbar-dark bg-success text-white">
                  <Link class="navbar-brand" to="#"><b>Stocks</b></Link>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
 
                      <li class="nav-item active">
                        <Link class="nav-link" to="/add proucts">Add Product</Link>
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
                        <h1>Add Products</h1>
                            <br />
                            <div class="col">
                            <input type="text" class="form-control"  name="pname" value={this.state.pname} onChange={this.onChangeProductName} placeholder="Product Name"/>
                            </div>
                            <br />
                            <div class="col">
                            <input type="text" class="form-control" name="price" value={this.state.price} onChange={this.onChangeProductPrice} placeholder="Product Price"/>
                            </div>
                            <br />
                            <div class="col">
                            <input type="text" class="form-control" name="quantity" value={this.state.quantity} onChange={this.onChangeProductQuantity} placeholder="Product Quantity"/>
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
                </div>
    )
}
}
