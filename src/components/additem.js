import React, { Component } from 'react';
import Loggedin from './nav-log.js';
import { Redirect } from 'react-router-dom';
import {Toaster}from 'react-toaster-js'
import  { FormGroup,FormControl, Button, InputGroup,Col }from 'react-bootstrap';
import axios from 'axios'
class AddItem extends Component{
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
        url : apiUrl+'api/bucketlists/'+this.props.match.params.bucketlist_id+'/items/',
        data: payload,
        method: "post",
        headers: {
            'Authorization' :"Bearer " +window.localStorage.getItem("token"),
            'content_type':"application/json"
        }
    })
    .then(response=> {
        alert(response.data.message)
       this.setState({redirect:true})
    }
)
.catch(error=> {
    console.log(JSON.stringify(error));
    alert(error.response.data.error)
})
}

    render()
    {
        const redirect = this.state.redirect
        if (redirect) {
            return <Redirect to={{pathname: '/api/bucketlist/mybuckets'}} />
        }
        return(
            <div>
                <Loggedin/>
                <Col md = {4} mdPush={4}>
                <h4>Add an item to this bucketlist </h4>
                <FormGroup>
                <InputGroup>
                <FormControl type="text" placeholder="item name" onChange={(event)=>this.setState({name:event.target.value})} required/>
                <InputGroup.Button><Button bsStyle="primary" onClick={(event=>this.handleClick(event))}>Submit</Button></InputGroup.Button>
                </InputGroup>
                </FormGroup>
                </Col>
                </div>
        )
    }
}
export default AddItem