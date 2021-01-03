import Axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';



export default class Investor extends React.Component{

  constructor(){
    super()
    this.state={investor:[]
  }}
  componentDidMount(){
    Axios.get("http://localhost:8080/investor").then(res =>{console.log(res.data)
  this.setState({investor:res.data.investor})
  })
  }
  deleteInvestor = (id) => {
    Axios.delete('http://localhost:8080/investor/'+ id)
    .then((res) => {
        console.log('Investor successfully deleted!')
         alert('Deleted succesfully')
        this.setState({
          investor: this.state.investor.filter(user => user.id !== id)
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
                            <Link class="nav-link" to="#">Investor list</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link" to="#"></Link>
                        </li>
                        </ul>
                        
                    </div>
                </nav>  
                </div>
<div className="container mt-5">
<h1>Investor</h1>
<h1><td><Link to="/addinvestor"><button type="button" class="btn btn-success">Add Investor</button></Link></td></h1>

<table class="table table-hover text-center bordered">
              <thead class="thead-dark">
                <tr>
              
                  <th>Investor Name</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                  {this.state.investor.map(investor =>{
                    return(

                      <tr>
                    <td scope="row">{investor.iname}</td>
                    {/* <td scope="row">{product.price}</td> */}
              
                    <td><Link to={"/updateinvestor/" +investor.id}><button type="button" class="btn btn-secondary">Update</button></Link></td>
                    {/* <td><button type="button" class="btn btn-danger">Delete</button></td> */}
                    <td><Link onClick={() => this.deleteInvestor(investor.id)}><button type="button" className="btn btn-dark">Delete</button></Link></td>

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
