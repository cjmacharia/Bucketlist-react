import React, { Component } from 'react';
import {Panel , Col,Button} from 'react-bootstrap';
import Loggedin from './nav-log.js';
import axios from 'axios'

class Mybuckets extends Component{
    constructor(props){
    super();
    this.state = {

        bucketlists:[]
    }
    }

    getBuckets(){
        axios({
            url : 'http://localhost:5000/api/bucketlists/',
            method: "get",
            headers: {
                'Authorization' :"Bearer " +window.localStorage.getItem("token"),
                'content_type':"application/json"
            }
        })

        .then(response => this.setState({
                    bucketlists:response.data.bucketlists
            })
        )
        .catch((error)=>{
            console.log(JSON.stringify(error));
            alert(error.response.data.message)
        })
    }

    componentDidMount(){
        this.getBuckets()
    }
render(){
    let bucketlists = this.state.bucketlists
    console.log(bucketlists)
    return(
        <div>
            <Loggedin/>


             {bucketlists.map((bucketlist)=>{
				return(
                    <Col md = {4} >
                    <Panel header={bucketlist.name}
                     bsStyle="info">
				  				<a href="/addItem" className="btn btn-primary fa fa-plus" ></a>
                                  <a href="/deleteBucket" className="btn btn-danger fa fa-trash"></a>
                                  <a href="/editBucket" className="btn btn-warning fa fa-pencil"></a>
                                  </Panel>
                                  </Col>
							)
                            })
                            }


            </div>
    )
}
}
export default Mybuckets