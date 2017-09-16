import React, { Component } from 'react';
import Loggedin from './nav-log.js';
import { Redirect } from 'react-router-dom';
import {Toaster}from 'react-toaster-js'
import  { FormGroup,FormControl, Button }from 'react-bootstrap';
import axios from 'axios'
class Dashboard extends Component{
    constructor(props){
    super(props);
    this.state={
        name:'',
    }
}
handleClick(event) {
    console.log(window.localStorage.getItem("token"))
    var apiUrl = "http://localhost:5000/";
    var payload = {
    "name":this.state.name,
    }
    console.log(payload)

    axios({
        url : apiUrl+'api/bucketlists/',
        data: payload,
        method: "post",
        headers: {
            'Authorization' :"Bearer " +window.localStorage.getItem("token"),
            'content_type':"application/json"
        }
    })
    .then((response)=> {

       this.setState({redirect:true})
    }
)
.catch((error)=> {
    console.log(JSON.stringify(error));
    alert(error.response.data.message)
})
}

    render()
    {
        const redirect = this.state.redirect
        if (redirect) {
            return <Redirect to={{pathname: '/mybuckets'}} />
        }
        return(
            <div>
                <Loggedin/>
                <FormGroup>
                <FormControl type="text" placeholder="bucketlist name" onChange={(event)=>this.setState({name:event.target.value})} required/>
                </FormGroup>
                <Button bsStyle="primary" onClick={(event=>this.handleClick(event))}>Submit</Button>
                </div>
        )
    }
}
export default Dashboard