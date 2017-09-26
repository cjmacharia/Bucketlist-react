import React, { Component } from 'react';
import  { Panel, Col, FormGroup,FormControl, Button}from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import { toast} from 'react-toastify';
import Toaster from '../containers/toaster.js';
import Navigator from './navigate.js'
class RegisterPage extends Component{
    constructor(props){
        super(props)
        this.state = {
          username: '',
          email: '',
          redirect: false,
          password: '',
          cpassword: ''
        }
    }

    handleClick = (event) => {
      var apiUrl = "http://localhost:5000/";
      var payload = {
        "email":this.state.email,
        "username":this.state.username,
        "password":this.state.password,
        "cpassword":this.state.cpassword
      }
        if(this.state.password !== this.state.cpassword){
            toast("password mismatch please try again")
            return 0;
        }

        axios.post(apiUrl+'api/bucketlists/auth/register/', payload)
        .then((response)=>{
          toast.success(response.data.message)
          this.setState({redirect:true})
            // console.log(JSON.stringify(response))
        })
        .catch((error)=> {
          toast.error(error.response.data.error)
          })
    }
  render(){
      const redirect = this.state.redirect
      if ( redirect ){
        return <Redirect to={{pathname: '/login'}} />
        }
      return(
        <div>
            <Navigator />
            <Col md = {4} mdPush={4} >
            <Toaster/>
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
            </Col>
            </div>

      );
    }
    }

export default RegisterPage;