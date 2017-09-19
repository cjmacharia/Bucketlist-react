import React, { Component } from 'react';
import { Col,Button, Table} from 'react-bootstrap';
import Loggedin from './nav-log.js';
import axios from 'axios';
import './style.css'

class BucketItems extends Component{
    constructor(props){
    super();
    this.state = {
        items:[]
    }
    }

    getBuckets(){
        axios({
            url : 'http://localhost:5000/api/bucketlists/'+this.props.match.params.bucketlist_id+'/items',
            method: "get",
            headers: {
                'Authorization' :"Bearer " +window.localStorage.getItem("token"),
                'content_type':"application/json"
            }
        })

        .then(response => this.setState({
                    items:response.data
            })

        )
        .catch((error)=>{
            console.log(JSON.stringify(error));
        })
    }

    componentDidMount(){
        this.getBuckets()
    }
render(){
    let x = 0;
    let items = this.state.items
    console.log(items)
    return(
        <div>
            <Loggedin/>

            <div className="container">
                <Col md={6}  mdPush={3}>
                        <Table responsive className="sTable">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Bucketname</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                    <tbody>
             {items.map((item)=>{
				return(
                        <tr>
                            <td>{++x}</td>
                            <td>{item.name}</td>
                            <td>
                                <a href={"/api/bucketlist/editbucketlist/"+item.id} className="btn btn-warning fa fa-pencil">edit</a>
                                <a href={"/api/bucketlist/delete/"} className="btn btn-danger fa fa-trash">delete</a>

                            </td>
                        </tr>

							)
                            })
                            }
                            </tbody>
                            </Table>
                            </Col>
                        </div>

            </div>
    )
}
}
export default BucketItems