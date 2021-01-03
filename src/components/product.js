import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Products extends Component {

  logout=(e)=>{

    e.preventDefault();

    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.props.history.push('/')
    
  }

    render(){
        return(
              <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-success text-white">
                  <Link class="navbar-brand" to="#"><b>Stocks</b></Link>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">

                      <li class="nav-item active">
                        <Link class="nav-link" to="/product1">Product </Link>
                      </li>

                      <li class="nav-item active">
                        <Link class="nav-link" to="/company">Company</Link>
                      </li>

                       <li class="nav-item active">
                        <Link class="nav-link" to="/investor">Investor</Link>
                      </li>
                    </ul>

                      <ul className="navbar-nav ml-auto">
                      <li class="nav-item7 active">
                        <Link class="nav-link" to="/" onClick={this.logout}>Logout</Link>
                      </li>
                      </ul>
                  </div>
                </nav> 
                <h1>Welcome to Product Page</h1>
                 
        </div> 

        )
    }
}