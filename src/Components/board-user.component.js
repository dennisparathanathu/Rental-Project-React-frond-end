import React, { Component } from "react";
import '../StyleSheet/bord.css'

import UserService from "../services/user.service";
import AuthService from "../services/auth.service";
import { Link } from "react-router-dom";
import ProductsByUser from '../Components/productsbyuser.component';

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentuser:'',
      content: ""
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    this.setState({
      currentuser: user
    });
    console.log(this.currentuser)
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    const { currentUser } = this.state;
    
    return (
  
      <div className="container">
        <br/>
        <br/>
        <br/>
        <div className="bordbody">

<div class="container mb-4">
    <div class="row">
        <div class="col-lg-4 pb-5">
      
            <div class="author-card pb-3">
                <div class="author-card-profile">
                    <div class="author-card-avatar"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Daniel Adams"/>
                    </div>
                    <div class="author-card-details">
    <h5 class="author-card-name text-lg">{this.state.currentuser.username}</h5><span class="author-card-position">{this.state.currentuser.email}</span>
                    </div>
                </div>
            </div>
            <div class="wizard">
                <nav class="list-group list-group-flush">
                    <a class="list-group-item active" href="#">
                        <div class="d-flex justify-content-between align-items-center">
                            <div><i class="fa fa-shopping-bag mr-1 text-muted"></i>
                              <a>  <div class="d-inline-block font-weight-medium text-uppercase"><Link to={`/getproductbyuser/${ this.state.currentuser._id }`}>My products </Link></div></a>
                            </div><span class="badge badge-secondary">6</span>
                        </div>
                    </a><a class="list-group-item" href="#"><i class="fa fa-user text-muted"></i><Link to={`/getproductbyuser/${ this.state.currentuser._id }`}>My products </Link></a>
                    <a class="list-group-item" href="#">
                        <div class="d-flex justify-content-between align-items-center">
                            <div><i class="fa fa-heart mr-1 text-muted"></i>
                                <div class="d-inline-block font-weight-medium text-uppercase">My Wishlist</div>
                            </div><span class="badge badge-secondary">3</span>
                        </div>
                    </a>
              
                </nav>
            </div>
        </div>
        <ProductsByUser/>
    
      
    </div>
</div>



      </div>
      </div>
    );
  }
}
