import React, { Component } from 'react';
import  { Panel, Col, FormGroup,FormControl, Button}from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Navigator from './navigate.js';
import { toast} from 'react-toastify';
import Toaster from '../containers/toaster.js';
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false
    }
  }

    handleClick(event) {
      var apiUrl = "https://andela-bucketlistapi.herokuapp.com/";
      var payload = {
        "email":this.state.email,
        "password":this.state.password
      }
      axios.post(apiUrl+'api/bucketlists/auth/login/', payload)
      .then((response) => {
        window.localStorage.setItem('token' , response.data.access_token)
        toast.success(response.data.message)
        this.setState({redirect:true})
      })
      .catch((error) => {
        toast.error(error.response.data.error);
      })
    }

  render(){
    const redirect = this.state.redirect
    if (redirect) {
      return <Redirect to = {{pathname: '/api/bucketlist/mybuckets'}} />
    }
    return(
      <div>
        <Navigator />
        <Col md = {4} mdPush = { 4 } >
        <Toaster/>
          <Panel header='login' bsStyle="warning">
            <FormGroup>
              <FormControl type="email" placeholder= "email" onChange={(event)=>this.setState({email:event.target.value})} data-error= "this field can not be empty" required/>
            </FormGroup>
            <FormGroup>
             <FormControl type="password" placeholder="Password" onChange={(event)=>this.setState({password:event.target.value})} required/>
            </FormGroup>
            <Button bsStyle="success" onClick={(event=>this.handleClick(event))}>Login</Button>
          </Panel>
          </Col>
      </div>
    )
  }
}

export default LoginPage;