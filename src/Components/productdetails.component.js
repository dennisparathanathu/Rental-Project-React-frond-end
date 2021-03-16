import React, { Component } from "react";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

import ProductsService from "../services/products.service";
import '../StyleSheet/productdetails.css'

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      content: "",
      currentuser:''
    };
    this.additemtowishlist = this.additemtowishlist.bind(this);

  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    this.setState({
      currentuser: user
    });

    ProductsService.getSingleProduct(this.props.match.params.productId).then(
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
  additemtowishlist(){
    UserService.addproducttowishlist(this.state.content._id);
    console.log(this.state.content._id)
    alert("item added to wish list")

    

  }

  render() {
    return (
      <div className="container">
    <div class="container">
		<div class="card">
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img src={this.state.content.image} /></div>
						  
						</div>
					</div>
					<div class="details col-md-6">
    <h3 class="product-title">{this.state.content.productname}</h3>
						<div class="rating">
					
    <span class="review-no">Category:{this.state.content.category}</span>
						</div>
    <p class="product-description">{this.state.content.description}</p>
    <h4 class="price">Rent per Day <span>{this.state.content.rentperday}</span></h4>
    <h4 class="price">Rent per Week <span>{this.state.content.rentperweek}</span></h4>
						<p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
			
						<h5 class="colors">Location:{this.state.content.city}
						</h5>
    <h5>Address:{this.state.content.address},{this.state.content.district},{this.state.content.state}</h5>
						<div class="action">
							<button class="add-to-cart btn btn-default" type="button" onClick={this.additemtowishlist}>add to Favourite</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

  
      </div>
    );
  }
}
