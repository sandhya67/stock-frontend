import Axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './navbar';



export default class Product1 extends React.Component{

  constructor(){
    super()
    this.state={product:[]
  }}
  componentDidMount(){
    Axios.get("http://localhost:8080/product").then(res =>{console.log(res.data)
  this.setState({product:res.data.product})
  })
  }
  deleteProduct = (pid) => {
    Axios.delete('http://localhost:8080/product/'+ pid)
    .then((res) => {
        console.log('product successfully deleted!')
         alert('Deleted succesfully')
        this.setState({
          product: this.state.product.filter(user => user.pid !== pid)
        })

    }).catch((error) => {
        console.log(error)
    })
}
    render(){
        return(
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
                            <Link class="nav-link" to="#">Product list</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link" to="#"></Link>
                        </li>

                        </ul>
                        
                    </div>
                </nav>  
                </div>
<div className="container mt-5">
  <h1>Products</h1>
<h1><td><Link to="/addproduct"><button type="button" class="btn btn-success">Add Product</button></Link></td></h1>

<table class="table table-hover text-center bordered">
              <thead class="thead-dark">
                <tr>
              
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                  {this.state.product.map(product =>{
                    return(

                      <tr>
                    <td scope="row">{product.pname}</td>
                    <td scope="row">{product.price}</td>
                    <td scope="row">{product.quantity}</td>
              
                    <td><Link to={"/updateproduct/" +product.pid}><button type="button" class="btn btn-secondary">Update</button></Link></td>
                    
                    <td><Link onClick={() => this.deleteProduct(product.pid)}><button type="button" className="btn btn-dark">Delete</button></Link></td>
                  </tr>
                    )
                  })}
                </tbody>

            </table>
</div>
            
            </div>
        )
    }
}
