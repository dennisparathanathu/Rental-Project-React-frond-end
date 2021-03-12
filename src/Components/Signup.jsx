import React, { Component } from 'react';
import '../StyleSheet/Signup.css';
import axios from 'axios';

export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:'',
            vpassword:''
        };
        this.submit = this.submit.bind(this);
        this.handleForm = this.handleForm.bind(this);
      

    }
    handleForm(e){
        this.setState({
            [e.target.id] :e.target.value
        })
    }
    submit(e){
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
            alert(error.data.msg);
        })


    }
    render() {
        return (
            <div className="Signup__container">
                <form action="" className="Signup__form">
                    <label>Name</label>
                    <input type="text" placeholder="Enter your Name" id="name" onChange={this.handleForm}/>
                    <label>Email</label>
                    <input type="text" placeholder="Enter your Email" id="email" onChange={this.handleForm}/>
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" id="password" onChange={this.handleForm}/>
                    <label>Verify Password</label>
                    <input type="password" placeholder="Verify password" id="vpassword" onChange={this.handleForm}/>
                    <button onClick={this.submit} >Sign Up</button>
                </form>
            
        </div>
        )
    }
}
