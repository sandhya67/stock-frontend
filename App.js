import { BrowserRouter as Router , Route  } from 'react-router-dom';
import './App.css';

import Navbar from "./components/navbar";
import Home from './components/home';
import Contact from './components/Contact';
import Product from './components/product';
import AddProduct from './components/addproduct';
import Company from './components/company';
import Investor from './components/investor';
import Login from './components/Login';
import Register from './components/Register';
import Product1 from './components/product1';
import updateproduct from './components/updateproduct';
import AddCompany from './components/addcompany';
import showcompany from './components/showcompany';
import UpdateCompany from './components/updatecompany';
import addinvestor from './components/addinvestor';
import showInvestor from './components/showinvestor';
import updateInvestor from './components/updateinvestor';
import User from './components/user';
import Purchase from './components/purchase';


 


function App() {
  return (
    <div className="App">
     
    <Router>

    <switch>

      <Route exact path="/" component={Home} />
      <Route exact path="/user" component={User} />
      <Route exact path="/purchase/:id" component={Purchase} />
      <Route path="/product" component={Product} />
      <Route path="/Addproduct" component={AddProduct} />
      <Route path="/product1" component={Product1} />
      <Route path="/updateproduct/:pid" component={updateproduct} />
      <Route path="/showcompany" component={showcompany} />
      <Route path="/updatecompany/:cid" component={UpdateCompany} />
      <Route path="/addCompany" component={AddCompany} />
      <Route path="/contact" component={Contact} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />      
      <Route path="/Company" component={Company} /> 
      <Route path="/investor" component={Investor} />
      <Route path="/addinvestor" component={addinvestor} />
      <Route path="/showinvestor" component={showInvestor} />
      <Route path="/updateinvestor" component={updateInvestor} />
      <Route path="/navbar"  component={Navbar} />
      
    </switch>

   </Router>



    </div>
  );
}

export default App;