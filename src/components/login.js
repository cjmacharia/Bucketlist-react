import React, { Component } from 'react';
import  { Panel, Col, FormGroup,FormControl, Button}from 'react-bootstrap';
import axios from 'axios';
import Navigator from './navigate.js'
class LoginPage extends Component{
    constructor(props){
    super(props);
    this.state={
        email:'',
        password:''
    }
    }
    handleClick(event){
        var apiUrl = "http://localhost:5000/";
        var payload={
        "email":this.state.email,
        "password":this.state.password
        }
        console.log(payload)
        axios.post(apiUrl+'api/bucketlists/auth/login/', payload)
        .then(function(response){
            console.log(payload);
            if (response.data.code === 200){
                console.log("Login successfull");
            }
            if(response.data.code === 401){ 
                console.log("an authorization error occured please try again");

            }
        }
    );
    }
      render(){
          return(
            <div>
                <Navigator />

                <Col md = {6} mdPush={3} >
                <Panel header='login' bsStyle="warning">
                <FormGroup>
                <FormControl type="email" placeholder="email" onChange={(event)=>this.setState({email:event.target.value})}/>
                </FormGroup>
                <FormGroup>
                <FormControl type="password" placeholder="Password" onChange={(event)=>this.setState({password:event.target.value})}/>
                </FormGroup>
                <Button bsStyle="success" onClick={(event=>this.handleClick(event))}>Login</Button>
                </Panel>
                </Col>

                </div>

          );
        }
    }

export default LoginPage;