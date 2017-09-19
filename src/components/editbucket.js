import React, { Component } from 'react';
import Loggedin from './nav-log.js';
import { Redirect } from 'react-router-dom';
import {Toaster}from 'react-toaster-js'
import  { FormGroup,FormControl, Button,InputGroup,Col }from 'react-bootstrap';
import axios from 'axios'


class Manipulation extends Component{
    constructor(props){
        super(props);
        this.handleupdate = this.handleupdate.bind(this);
        this.state = {
            name: "",
            redirect : false,
        }

    }

    handleupdate(event){
        this.setState({name: event.target.value})
    }
    updateBucket(event){
        let payload={
            name:this.state.name
        }
        axios ({
                url: 'http://localhost:5000/api/bucketlists/'+this.props.match.params.bucketlist_id,
                method: 'PUT',
                data:payload,
                headers: {
                    'Authorization' :"Bearer " +window.localStorage.getItem("token"),
                    'content_type':"application/json"
                }

        })
    }
        getBuckets(bucketlist_id){
            axios ({
            url: 'http://localhost:5000/api/bucketlists/'+this.props.match.params.bucketlist_id,
            method:'get',
            data:this.state.name,
            headers: {
                'Authorization' :"Bearer " +window.localStorage.getItem("token"),
                'content_type':"application/json"
            }
        })
        .then(response => this.setState({
            name:response.data.name
    })
)
.catch((error)=>{
    console.log(JSON.stringify(error));
    alert(error.response.message)
})
        }
componentDidMount(){
    this.getBuckets()
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
                <Col md={6}  mdPush={3}>
                <FormGroup>
                <InputGroup>
                <FormControl type="text" value={this.state.name} onChange={this.handleupdate} required/>
                <InputGroup.Button><Button bsStyle="primary" onClick={(event=>this.updateBucket(event))}>Submit</Button></InputGroup.Button>
                </InputGroup>
                </FormGroup>
                </Col>
                </div>
        )
    }
}

export default Manipulation