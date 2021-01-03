import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './navbar';


export default class Products extends React.Component {
  
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
                        <Link class="nav-link" to="/showCompany">Company</Link>
                      </li>
                    </ul>
                      <ul className="navbar-nav ml-auto">
                      <li class="nav-item7 active">
                        <Link class="nav-link" to="/">Logout</Link>
                      </li>
                      </ul>
                  </div>
                </nav> 

                <h1>Welcome to Company Page</h1>

              </div>
            <div>
        </div>

            </div>
        )
    }
}