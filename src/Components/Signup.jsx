import React, { Component } from 'react';
import '../StyleSheet/Signup.css';
//import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:'',
            password2:'',
            errors: {}
        };
 
    }
 onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    console.log(newUser);
  };
    /* submit(e){
        e.preventDefault();
        const data = new FormData();
        data.('email',this.state.email);
        data.append('password',this.state.password);
        data.append('name',this.state.name);
        data.append('verifiedPassword',this.state.vpassword)

        axios.post('http://localhost:5000/api/user-registration',data).then(response =>{
            alert(response.data.msg);
        }).catch(error =>{
            console.log(error)
            alert(error);
        })


    } */
    render() {
        const { errors } = this.state;
        return (
            <div className="Signup__container">
                <form noValidate onSubmit={this.onSubmit} className="Signup__form">
                    <label>Name</label>
                    <input type="text" placeholder="Enter your Name" id="name" error={errors.name} onChange={this.onChange} value={this.state.name}/>
                    <label>Email</label>
                    <input type="text" placeholder="Enter your Email" id="email" onChange={this.onChange} value={this.state.email} error={errors.email}/>
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" id="password" onChange={this.onChange} value={this.state.password} error={errors.password}/>
                    <label>Verify Password</label>
                    <input type="password" placeholder="Verify password" id="password2" onChange={this.onChange} value={this.state.password2} error={errors.password2}/>
                    <button type="submit" >Sign Up</button>
                </form>
            
        </div>
        )
    }
}
export default Signup
