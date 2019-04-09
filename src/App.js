import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter , Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import AddCustomer from './components/Customer/AddCostomer'
class App extends Component {
 
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Dashboard} />
          <Route path='/addCustomer' component={AddCustomer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
