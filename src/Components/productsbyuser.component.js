import React, { Component } from "react";
import AuthService from "../services/auth.service";
import ProductsService from "../services/products.service";
import { Link } from "react-router-dom";


export default class ProductsByUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
    this.deleteproduct = this.deleteproduct.bind(this);
    
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    ProductsService.getAllProductsbyuser(user.id)
    .then(
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
  deleteproduct(){
    ProductsService.deleteProduct(this.state.content._id)

  }

  render() {
    const{content}  =this.state
    return (
      <div className="container">
          <div class="col-lg-8 pb-5">
          {
                content && <div className="Products">
                    {
                    content.map(item =>{
                        return <div className="Item">
                            <Link to={`/productdetail/${ item._id }`} >
                            <div class="cart-item d-md-flex justify-content-between"><span class="remove-item"><i class="fa fa-times"></i></span>
                            <div class="px-3 my-3">
                              <a class="cart-item-product" href="#">
                            <div class="cart-item-product-thumb"><img src={item.image} alt="Product"/></div>
                            <div class="cart-item-product-info">
                    <h4 class="cart-item-product-title">{item.productname}</h4>
                    <div class="text-lg text-body font-weight-medium pb-1">{item.rentperday}</div><span>Category: <span class="text-success font-weight-medium">{item.category}</span></span>
                      </div>
                  </a>
              </div>
          </div>
          </Link>
          <button className="btn btn-danger" onClick={this.deleteproduct}>Delete</button>
                   
                        </div>
                    })
                }

                </div>
            }

          
      
    
        

      </div>
      </div>
    );
  }
}
