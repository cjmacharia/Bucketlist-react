import React, { Component } from 'react';
import { Col,Button, Table, Pager} from 'react-bootstrap';
import Loggedin from './nav-log.js';
import axios from 'axios';
import './style.css';
import {ToastContainer, toast} from 'react-toastify';
class Mybuckets extends Component{
    constructor(props){
    super(props);
        this.state = {
            bucketlists:[],
            next_page: '',
            previous_page: '',
        }
    this.getNextPage = this.getNextPage.bind(this);
    this.getprevPage = this.getprevPage.bind(this);
    }
   deleteHandler(event, id){
event.preventDefault();
axios({
    url: 'http://localhost:5000/api/bucketlists/'+id,
    method:"DELETE",
    headers: {
        'Authorization' :"Bearer " +window.localStorage.getItem("token"),
        'content_type':"application/json"
    }
})
  .then((response)=>{
    this.getBuckets()
  })
  .catch((error)=>{
    console.log(JSON.stringify(error))
  })
   }

    getNextPage(event){
        event.preventDefault();
        axios({
            url : 'http://localhost:5000'+this.state.next_page,
            method: "GET",
            headers: {
                'Authorization' :"Bearer " +window.localStorage.getItem("token"),
                'content_type':"application/json"
            }
        })
            .then((response)=> {this.setState({
                bucketlists:response.data.bucketlists,
                next_page:response.data.next_page,
                previous_page:response.data.previous_page,
        })
                }
        )
        .catch((error)=>
            console.log(JSON.stringify(error))
    )

    }
    getprevPage(event){
        event.preventDefault();
        console.log(this.state.previous_page)
        axios({
            url : 'http://localhost:5000'+this.state.previous_page,
            method: "GET",
            headers: {
                'Authorization' :"Bearer " +window.localStorage.getItem("token"),
                'content_type':"application/json"
            }
        })
            .then((response)=>  this.setState({
                bucketlists:response.data.bucketlists,
                previous_page:response.data.previous_page
        })
    )
        .catch((error)=>
            console.log(JSON.stringify(error))
    )

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
                    bucketlists:response.data.bucketlists,
                    next_page:response.data.next_page,
                    previous_page:response.data.previous_page
            })
        )
        .catch((error)=>{
          if (error.response) {
            toast(error.response.data.error);
                }
        })
    }

    componentDidMount(){
        this.getBuckets()
    }
render(){
    let bucketlists = this.state.bucketlists
    let x = 0
    return(
        <div>
            <Loggedin/>

            <div className="container">
                <Col md={6}  mdPush={3}>
                <ToastContainer
                position="top-right"
                type="default"
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick
                />
                        <Table responsive bordered className="sTable">
                            <thead className="bg-info">
                                <tr>
                                    <th>#</th>
                                    <th>Bucketname</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                    <tbody>

             {bucketlists.map((bucketlist)=>{
				return(

                        <tr>
                            <td><i>{++x}</i></td>
                            <td>{bucketlist.name}</td>
                            <td>
                                <a href={"/api/bucketlist/addItem/"+bucketlist.id} className="btn btn-primary "><i className="fa fa-plus"></i> Add</a>
                                <a href={"/api/bucketlist/editbucketlist/"+bucketlist.id} className="btn btn-warning"><i className="fa fa-pencil"></i> Edit</a>
                                <a  onClick={(event=>this.deleteHandler(event, bucketlist.id))} className="btn btn-danger"><i className="fa fa-trash"></i> Delete</a>
                                <a href={"/api/bucketlist/"+bucketlist.id+"/items"} className="btn btn-info"><i className="fa fa-eye"></i> View</a>


                            </td>
                        </tr>

							)
                            })
                            }
                            </tbody>
                            </Table>
                            <Pager>
                                <Pager.Item onClick={this.getprevPage}>Previous</Pager.Item>
                                {' '}
                                <Pager.Item
                                onClick={this.getNextPage}>Next</Pager.Item>
                            </Pager>
                            </Col>
                        </div>
            </div>
    )
}
}
export default Mybuckets