import React, { Component } from 'react';
import Loggedin from './nav-log.js';
import { Redirect } from 'react-router-dom';
import { toast} from 'react-toastify';
import  { FormGroup,FormControl, Button, Col,InputGroup }from 'react-bootstrap';
import axios from 'axios';
import Toaster from '../containers/toaster.js';
class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state={
      name:'',
    }
  }

handleClick(event) {
  event.preventDefault()
  var apiUrl = "http://localhost:5000/";
  var payload = {
    name:this.state.name,
  }
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
       toast.success(response.data.message)
    }
)
.catch((error)=> {

        toast.error(error.response.data.error);

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
                <div className="container">
                <Col md = {4} mdPush={4}>
                    <Toaster/>
                <h4>Add a bucket Name</h4>
                <FormGroup>
                <InputGroup>
                <FormControl type="text" placeholder="bucketlist name" onChange={(event)=>this.setState({name:event.target.value})} required/>
                <InputGroup.Button><Button type="submit" bsStyle="primary" onClick={(event=>this.handleClick(event))}>Submit</Button></InputGroup.Button>
                </InputGroup>
                </FormGroup>
                </Col>
                </div>
                </div>
        )
    }
}
export default Dashboard