/*import React from 'react';
import Signup from './Components/Signup.jsx'
import Homepage from './Components/Homepage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './StyleSheet/App.css';
import Header from './Components/Header.jsx';
import Rental from './Components/rental';
import Products from './Components/Products.jsx';
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
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
  </Provider>

  );
}

export default App; */
import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StyleSheet/App.css";
import SearchIcon from '@material-ui/icons/Search';
import Logo from './images/logo1.jpg';
import "./StyleSheet/Header.css";

import AuthService from "./services/auth.service";

import Login from "./Components/login.component";
import Register from "./Components/register.component";
import Home from "./Components/home.component";
import Profile from "./Components/profile.component";
import BoardUser from "./Components/board-user.component";
import BoardModerator from "./Components/board-moderator.component";
import BoardAdmin from "./Components/board-admin.component";
import Homepage from './Components/Homepage';
import Rental from './Components/rental';
import ProductDetails from './Components/productdetails.component';
import ProductsByUser from './Components/productsbyuser.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <div className="Header__container">
            <div className="Header__leftContainer">
                <Link to="/">
                <img src={Logo} alt="rental-logo" className="Header__leftContainerLogo"/>
                </Link>
            </div>
            <div className="Header__centerContainer">
                <input type="text" placeholder="Find cameras, tripodes, laptops" className="Header__centerContainerInput"/>
                <SearchIcon className="Header__centerContainerIcon"/>
            </div>
            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}
                 {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}

            {currentUser ? (
            <div className="Header__rightContainer">
              <li className="Header__rightContainerText">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="Header__rightContainerbutton">
                <Link to={"/rental"} className="nav-link">
                  Rent
                </Link>
              </li>
              <li className="Header__rightContainerbutton">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="Header__rightContainer">
              <li className="Header__rightContainerText">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="Header__rightContainerText">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}


            
        </div>
        

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Homepage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/rental" component={Rental} />
            <Route path="/productdetail/:productId" component={ProductDetails} />
            <Route path="/getproductbyuser/:userId" component={ProductsByUser} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
