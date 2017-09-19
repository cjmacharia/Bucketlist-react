import React, { Component } from 'react';
import  { Panel, Col, FormGroup,FormControl, Button}from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Navigator from './navigate.js';
import ReactToaster from 'react-toastr';
import {ToastContainer, ToastMessage} from 'react-toastr';
import Toaster from '../containers/toaster.js';
let ToastMessageFactory = React.createFactory(ToastMessage.animation);
class LoginPage extends Component {
    constructor(props) {
    super(props);
    this.state = {
        email:'',
        password:'',
        redirect:false
    }
    }
    handleClick(event) {
        var apiUrl = "http://localhost:5000/";
        var payload = {
        "email":this.state.email,
        "password":this.state.password
        }
        axios.post(apiUrl+'api/bucketlists/auth/login/', payload)
        .then((response)=> {
           this.setState({redirect:true})
           window.localStorage.setItem('token' , response.data.access_token)
           console.log(JSON.stringify(response))
        }
    )
    .catch((error)=> {
        console.log(error);
        alert(error.response.data.error)
    })
    }
      render(){
        const redirect = this.state.redirect
        if (redirect) {
            return <Redirect to={{pathname: '/welcome'}} />
        }
          return(
            <div>
                <Navigator />

                <Col md = {4} mdPush={4} >
                <form data-toggle="validator">
                <Panel header='login' bsStyle="warning">
                <FormGroup>
                <FormControl type="email" placeholder= "email" onChange={(event)=>this.setState({email:event.target.value})} data-error= "this field can not be empty" required/>
                <div className="help-block with-errors">
                </div>
                </FormGroup>
                <FormGroup>
                <FormControl type="password" placeholder="Password" onChange={(event)=>this.setState({password:event.target.value})} required/>
                </FormGroup>
                <Button bsStyle="success" onClick={(event=>this.handleClick(event))}>Login</Button>
                </Panel>
                </form>
                </Col>

                </div>

          );
        }
    }

export default LoginPage;