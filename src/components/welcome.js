import React, { Component } from 'react';
import Loggedin from './nav-log.js';
import { Redirect } from 'react-router-dom';
import images from './images.png';
import { toast} from 'react-toastify';
import  {  Panel, Col }from 'react-bootstrap';
import axios from 'axios';
import './style.css';

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
                <Col md = {6} mdPush={3} >
                    <Panel className="panelstyle">
                    <Col md = {9} mdPush={3} >
                        <h3>Welcome to the bucketlist application </h3>
                        <p></p>
                        <h6>please click the button to add buckets </h6>
                        </Col>
                        <Col md = {6} mdPush={4} >
                        <img src={images} href="/api/bucketlist/mybuckets" className="img"/>
                        </Col>

                    </Panel>
                </Col>
                </div>
                </div>
        )
    }
}
export default Dashboard