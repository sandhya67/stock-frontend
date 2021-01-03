import Axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';



export default class ShowCompany extends React.Component{

  constructor(){
    super()
    this.state={company:[]
  }}
  componentDidMount(){
    Axios.get("http://localhost:8080/company").then(res =>{console.log(res.data)
  this.setState({company:res.data.company})
  })
  }
  deleteCompany = (cid) => {
    Axios.delete('http://localhost:8080/company/'+ cid)
    .then((res) => {
        console.log('company successfully deleted!')
         alert('Deleted succesfully')
        this.setState({
          company: this.state.company.filter(user => user.cid !== cid)
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
                            <Link class="nav-link" to="#">Company list</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link" to="#"></Link>
                        </li>
                        </ul>
                        
                    </div>
                </nav>  
                </div>
<div className="container mt-5">
<h1>Company</h1>
<h1><td><Link to="/addcompany"><button type="button" class="btn btn-success">Add Company</button></Link></td></h1>

<table class="table table-hover text-center bordered">
              <thead class="thead-dark">
                <tr>
              
                  <th>Company Name</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                  {this.state.company.map(company =>{
                    return(

                      <tr>
                    <td scope="row">{company.cname}</td>
              
                    <td><Link to={"/updatecompany/" +company.cid}><button type="button" class="btn btn-secondary">Update</button></Link></td>
 
                    <td><Link onClick={() => this.deleteCompany(company.cid)}><button type="button" className="btn btn-dark">Delete</button></Link></td>

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
