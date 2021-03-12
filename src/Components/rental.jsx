import React, { Component } from 'react';
import '../StyleSheet/Signup.css';
import axios from 'axios';

export default class Rental extends Component {
    constructor(props){
        super(props);
        this.state={
            productname:'',
            owner:'',
            description:'',
            rentperday:null,
            rentperweek:null,
            image:'',
        };
        this.submit = this.submit.bind(this);
        this.handleForm = this.handleForm.bind(this);
      

    }
    handleForm(e){
        this.setState({
            [e.target.id] : e.target.files ? e.target.files[0]: e.target.value
        })
    }
    submit(e){
        e.preventDefault();
        const data = new FormData();
        data.append('productname',this.state.productname);
        data.append('owner',this.state.owner);
        data.append('description',this.state.description);
        data.append('rentperday',this.state.rentperday);
        data.append('rentperweek',this.state.rentperday); 
        data.append('image',this.state.image);

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
                    <input type="text" placeholder="Enter Product Name" id="productname" onChange={this.handleForm}/>
                    <label>Owner</label>
                    <input type="text" placeholder="Enter owner Name" id="owner" onChange={this.handleForm}/>
                    <label>Photo</label>
                    <input type="file" placeholder="Enter product image" id="image" onChange={this.handleForm}/>
                    <label>Rent Per Day</label>
                    <input type="text" placeholder="Enter Rent Per Day" id="rentperday" onChange={this.handleForm}/>
                    <label>Rent Per Week</label>
                    <input type="text" placeholder="Enter Rent Per Week" id="rentperweek" onChange={this.handleForm}/>
                    <label>Description</label>
                    <input type="text" placeholder="Enter product description" id="description" onChange={this.handleForm}/>
                    <button onClick={this.submit} >Add product</button>
                </form>
            
        </div>
        )
    }
}
