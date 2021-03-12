import React from 'react';
import Signup from './Components/Signup.jsx'
import Homepage from './Components/Homepage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './StyleSheet/App.css';
import Header from './Components/Header.jsx';
import Rental from './Components/rental';
import Products from './Components/Products.jsx';
function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/user-signup">
          <Header />
          < Signup />

        </Route>
        <Route path="/add-product">
          <Header/>
          <Rental />

        </Route>
        <Route path="/">
          <Homepage />

        </Route>
        <Route path="/all-products">
          <Header/>
          <Products/>
          

        </Route>

      </Switch>
      
    </Router>
  );
}

export default App;
