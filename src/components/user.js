import Axios from 'axios';
import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom';



export default class Sale extends Component{


  constructor(){
    super()
    this.state={sale:[]
  }}
  componentDidMount(){
    Axios.get("http://localhost:8080/sale").then(res =>{console.log(res.data)
  this.setState({sale:res.data.sale})
  })
  }
  deletePurchase = (id) => {
    Axios.delete('http://localhost:8080/sale/'+ id)
    .then((res) => {
        console.log('sale successfully deleted!')
         alert('Purchased succesfully')
        this.setState({
          sale: this.state.sale.filter(user => user.id !== id)
        })

    }).catch((error) => {
        console.log(error)
    })
}

logout=(e)=>{

  e.preventDefault();

  localStorage.removeItem('token');
  localStorage.removeItem('role');
  this.props.history.push('/')
  
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
                            <Link class="nav-link" to="#">Users list</Link>
                        </li>
                        {/* <li class="nav-item active">
                            <Link class="nav-link" to="/sale">Sale</Link>
                        </li> */}

                        </ul>
                        <ul className="navbar-nav ml-auto">
                      <li class="nav-item7 active">
                        <Link class="nav-link" to="/" onClick={this.logout}>Logout</Link>
                      </li>
                      </ul>
                    </div>
                </nav>  
                </div>
<div className="container mt-5">
 

<table class="table table-hover text-center bordered">
              <thead class="thead-dark">
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Purchase</th>
                  <th>Sale</th>

                </tr>
                </thead>
                <tbody>
                  {this.state.sale.map(sale =>{
                    return(

                      <tr>
                    <td scope="row">{sale.name}</td>
                    <td scope="row">{sale.price}</td>
                    <td scope="row">{sale.quantity}</td>

              
                    <td><Link to={"/purchase/" +sale.id}><button type="button" class="btn btn-secondary">Purchase</button></Link></td>
                    <td><Link onClick={() => this.deletePurchase(sale.id)}><button type="button" className="btn btn-dark">Sale</button></Link></td>
                    
                    
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
