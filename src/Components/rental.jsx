import React, { Component } from 'react';
import '../StyleSheet/Signup.css';
import axios from 'axios';
import AuthService from "../services/auth.service";


export default class Rental extends Component {
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
        this.onChangeproductname = this.onChangeproductname.bind(this);
        this.onChangedescription = this.onChangedescription.bind(this);
        this.onChangerentperday = this.onChangerentperday.bind(this);
        this.onChangerentperweek = this.onChangerentperweek.bind(this);
        this.onChangeimage = this.onChangeimage.bind(this);
        this.onChangeaddress = this.onChangeaddress.bind(this);
        this.onChangecity = this.onChangecity.bind(this);
        this.onChangedistrict = this.onChangedistrict.bind(this);
        this.onChangestate = this.onChangestate.bind(this);
        this.onChangecategory = this.onChangecategory.bind(this);
        
        this.state={
            productname:'',
            description:'',
            rentperday:null,
            rentperweek:null,
            image:'',
            addedby:null,
            address:'',
            city:'',
            district:'',
            state:'',
            category:''

        };
        
    }
    onChangeproductname(e) {
        this.setState({
            productname: e.target.value
        });
      }
    onChangedescription(e) {
      this.setState({
        description: e.target.value
      });
    }
    onChangerentperday(e) {
        this.setState({
            rentperday: e.target.value
        });
    }
    onChangerentperweek(e) {
        this.setState({
            rentperweek: e.target.value
        });
    }
    onChangeimage(e) {
        this.setState({
            image: e.target.files[0]
        });
    }
    onChangeaddress(e) {
        this.setState({
            address: e.target.value
        });
    }
    onChangecity(e) {
        this.setState({
            city: e.target.value
        });
    }
    onChangedistrict(e) {
        this.setState({
            district: e.target.value
        });
    }
    onChangestate(e) {
        this.setState({
            state: e.target.value
        });
    }
    onChangecategory(e) {
        this.setState({
            category: e.target.value
        });
    }
    
    componentDidMount() {
        const user = AuthService.getCurrentUser();
        this.setState({addedby:user.id})
        console.log(user);
        console.log(user.id);
    } 


    submit(e){
        e.preventDefault();
        const data = new FormData();
        data.append('productname',this.state.productname);
        data.append('addedby',this.state.addedby);
        data.append('description',this.state.description);
        data.append('rentperday',this.state.rentperday);
        data.append('rentperweek',this.state.rentperweek); 
        data.append('image',this.state.image);
        data.append('address',this.state.address);
        data.append('city',this.state.city);
        data.append('district',this.state.district);
        data.append('state',this.state.state);
        data.append('category',this.state.category);



        axios.post('http://localhost:5000/api/upload',data).then(response =>{
            alert(response.data.msg);
        }).catch(error =>{
            console.log(error)
            alert(error);
        });


    }
    render() {
        return (
            <div className="  Signup__container">
                <form action="" className="Signup__form">
                    <label>Product Name</label>
                    <input type="text" placeholder="Enter Product Name" id="productname" onChange={this.onChangeproductname}/>
                    <label>Photo</label>
                    <input type="file" placeholder="Enter product image" id="image" onChange={this.onChangeimage}/>
                    <label>Rent Per Day</label>
                    <input type="text" placeholder="Enter Rent Per Day" id="rentperday" onChange={this.onChangerentperday}/>
                    <label>Rent Per Week</label>
                    <input type="text" placeholder="Enter Rent Per Week" id="rentperweek" onChange={this.onChangerentperweek}/>
                    <label>Description</label>
                    <input type="text" placeholder="Enter product description" id="description" onChange={this.onChangedescription}/>
                    <label>Address</label>
                    <input type="text" placeholder="Enter your residing address" id="address" onChange={this.onChangeaddress}/>
                    <label>State</label>
                    <input type="text" placeholder="Enter your residing state" id="state" onChange={this.onChangestate}/>
                    <label>District</label>
                    <input type="text" placeholder="residing district" id="district" onChange={this.onChangedistrict}/>
                    <label>City</label>
                    <input type="text" placeholder="residing city" id="city" onChange={this.onChangecity}/>
                    <label>Category</label>
                    <input type="text" placeholder="Enter product category" id="category" onChange={this.onChangecategory}/>
                    <button onClick={this.submit} >Add product</button>
                </form>
            
        </div>
        )
    }
}
