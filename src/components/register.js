import React, { Component } from 'react';
import  { Panel, Col, FormGroup,FormControl, Button}from 'react-bootstrap';
import axios from 'axios';
import Navigator from './navigate.js'
class RegisterPage extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            email:'',
            password:'',
            cpassword:''
        }
    }
    handleClick(event){
        var apiUrl = "http://localhost:5000/";
        var payload={
        "email":this.state.email,
        "username":this.state.username,
        "password":this.state.password,
        "cpassword":this.state.cpassword

        }
        console.log(payload)
        axios.post(apiUrl+'api/bucketlists/auth/register/', payload)
        .then((response)=>{
            // if (response.data.code === 200){
            //     console.log("Login successfull");
            //     alert("successful")
            // }
            // if(response.data.code === 401){
            //     console.log("an authorization error occured please try again");
            //     alert("authorization error please try again")

            // }
            // if(response.data.code === 403){
            //     console.log("an error occured please try again");
            //     alert("an error occured")

            // }
            console.log(JSON.stringify(response))
        })
        .catch((error)=> {
            alert(error.response.data.error)
           }
        )
    }
      render(){
          return(
            <div>
                <Navigator />

                <Col md = {6} mdPush={3} >
                <form>
                <Panel header='Register' bsStyle="warning">
                <FormGroup>
                <FormControl type="text" placeholder="username" onChange={(event)=>this.setState({username:event.target.value})}/>
                </FormGroup>
                <FormGroup>
                <FormControl type="email" placeholder="email" onChange={(event)=>this.setState({email:event.target.value})}/>
                </FormGroup>
                <FormGroup>
                <FormControl type="password" placeholder="Password" onChange={(event)=>this.setState({password:event.target.value})}/>
                </FormGroup>
                <FormGroup>
                <FormControl type="password" placeholder="confirm Password" onChange={(event)=>this.setState({cpassword:event.target.value})}/>
                </FormGroup>
                <Button bsStyle="success" onClick={(event=>this.handleClick(event))}>Register</Button>
                </Panel>
                </form>
                </Col>

                </div>

          );
        }
    }

export default RegisterPage;