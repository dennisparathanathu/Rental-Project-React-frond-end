import React, { Component } from 'react';
import '../StyleSheet/Signup.css';
//import axios from 'axios';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            errors: {}
        };
 
    }
 onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
        email: this.state.email,
        password: this.state.password
      };
    console.log(userData);
  };
    /* submit(e){
        e.preventDefault();
        const data = new FormData();
        data.append('email',this.state.email);
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
                    <label>Email</label>
                    <input type="text" placeholder="Enter your Email" id="email" onChange={this.onChange} value={this.state.email} error={errors.email}/>
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" id="password" onChange={this.onChange} value={this.state.password} error={errors.password}/>
                    <button type="submit" >LogIn</button>
                </form>
            
        </div>
        )
    }
}
export default Login
