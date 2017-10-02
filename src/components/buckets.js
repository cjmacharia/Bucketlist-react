import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Col,Button, Table, Pager,Modal,InputGroup,FormControl,FormGroup} from 'react-bootstrap';
import Loggedin from './nav-log.js';
import axios from 'axios';
import ReactTooltip from 'react-tooltip';
import './style.css';
import { toast} from 'react-toastify';
import Toaster from '../containers/toaster.js';
const apiUrl = "https://andela-bucketlistapi.herokuapp.com";
class Mybuckets extends Component{
    constructor(props){
      super(props);
        this.state = {
          bucketlists: [],
          next_page: '',
          previous_page: '',
          showbuttons: false,
          addBucketModal: false,
          search_text:'',
          deletebucketModal: false,
          addItemModal: false,
          editbucketModal: false,
          id: '',
          name:'',
        }
      this.getNextPage = this.getNextPage.bind(this);
      this.getprevPage = this.getprevPage.bind(this);
      this.handleupdate = this.handleupdate.bind(this);
    }

    handleAddBuckets(event) {
      event.preventDefault()
      var payload = {
        name:this.state.name,
      }
      axios({
          url : apiUrl+'/api/bucketlists/',
          data: payload,
          method: "post",
          headers: {
              'Authorization' :"Bearer " +window.localStorage.getItem("token"),
              'content_type':"application/json"
          }
      })
        .then((response)=> {
          this.setState({
            addBucketModal:false
          })
           toast.success(response.data.message)
           this.getBuckets()
        }
    )
    .catch((error)=> {
      this.setState({
        addBucketModal:false
      })
      toast.error(error.response.data.error);
    })
    }

    handleSearch=(event)=>{
      axios({
        url : apiUrl+'/api/bucketlists/'+"?q="+this.state.search_text,
        method: "get",
        headers: {
          'Authorization' :"Bearer " +window.localStorage.getItem("token"),
          'content_type':"application/json"
        }
      })
      .then(response =>{
        this.setState({
          bucketlists:response.data,
      })
    })
      .catch(error=>
        console.log(JSON.stringify(error))
      )
    }

    handleupdate(event){
      this.setState({
        name: event.target.value
      })
    }

    updateBucket(event, id){
        let payload = {
          name: this.state.name
        }
        id = this.state.id
        axios ({
          url: `${apiUrl}/api/bucketlists/${id}`,
          method: 'PUT',
          data:payload,
          headers: {
            'Authorization' :"Bearer " +window.localStorage.getItem("token"),
            'content_type':"application/json"
          }

        })
          .then((response) => {
            this.setState({
              editbucketModal:false,
            })
            this.getBuckets()
            toast.success(response.data.message)
          })
          .catch((xhr) => {
            toast.error(xhr.response.data.error)
            this.setState({editbucketModal:false})
          })
    }

    handleAdditems(event, id){
      var payload = {
        name: this.state.name,
      }
      id = this.state.id

      axios({
        url: `${apiUrl}/api/bucketlists/${id}/items/`,
        data: payload,
        method: "post",
        headers: {
          'Authorization' :"Bearer " +window.localStorage.getItem("token"),
          'content_type':"application/json"
          }
      })

        .then(response => {
          toast.success(response.data.message)
          this.setState({addItemModal:false})
        })

        .catch(error => {
          toast.error(error.response.data.error)
          this.setState({addItemModal:false})
        })
    }

deleteHandler(event, id){
  id = this.state.id
  event.preventDefault();
    axios({
      url: `${apiUrl}/api/bucketlists/${id}`,
      method: "DELETE",
      headers: {
        'Authorization' :"Bearer " +window.localStorage.getItem("token"),
        'content_type':"application/json"
      }
    })

    .then((response) => {
      this.getBuckets()
      this.setState({deletebucketModal:false})
      toast.error("Bucketlist successfully deleted")
    })

    .catch((error) => {
      toast.error(error.response.data.error)
      this.setState({deletebucketModal:false})
    })
    }

    getNextPage(event){
        event.preventDefault();
        axios({
            url : apiUrl+this.state.next_page,
            method: "GET",
            headers: {
                'Authorization' :"Bearer " +window.localStorage.getItem("token"),
                'content_type':"application/json"
            }
        })
            .then((response) => {
              this.setState({
                bucketlists:response.data.bucketlists,
                next_page:response.data.next_page,
                previous_page:response.data.previous_page,
              })
            })
            .catch((error)=>
                console.log(JSON.stringify(error)))
    }

    checkBuckets(){
      let bucketlists = this.state.bucketlists
      if(bucketlists<1){
        return("you have no items create some")
      }
    }

    getprevPage(event){
      event.preventDefault();
      axios({
        url : apiUrl+this.state.previous_page,
        method: "GET",
        headers: {
          'Authorization' :"Bearer " +window.localStorage.getItem("token"),
          'content_type':"application/json"
        }
      })
        .then((response) =>  this.setState({
          bucketlists:response.data.bucketlists,
          previous_page:response.data.previous_page
        }))
        .catch((error) =>
            console.log(JSON.stringify(error)))
   }

    getBuckets(){
      axios({
        url : apiUrl+'/api/bucketlists/',
        method: "get",
        headers: {
          'Authorization' :"Bearer " +window.localStorage.getItem("token"),
          'content_type':"application/json"
        }
      })
      .then((response)  => {
        console.log(response.data)
        this.setState({
          bucketlists:response.data.bucketlists,
          next_page:response.data.next_page,
          previous_page:response.data.previous_page
        })
      })
      .catch((error) => {
        if(error.response){
          toast.warning(error.response.data.error);
        }
      })
    }
    getItems(event){
      axios({
        url: apiUrl+'/api/bucketlists/'+this.props.match.params.bucketlist_id+'/items/',
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
      })
  }

  componentDidMount(){
    this.getBuckets()
  }

  render(){
      const redirect = this.state.redirect
      if (redirect) {
        return <Redirect to = {{ pathname: '/login' }} />
      }
      let bucketlists = this.state.bucketlists
      let getItems = this.getItems
      let x = 0
      return(
          <div>
            <Loggedin/>
            <Col md = { 10 }  mdPush = { 9 }>
              <Button id="addbucket" onClick={(event => this.setState({
                addBucketModal:true
                }))}bsSize="small" bsStyle="primary">add</Button>
              </Col>
              <div className="container">
                  <Col md = { 6 }  mdPush = { 3 }>
                    <Toaster/>
                    {this.checkBuckets()?<div className="alert alert-danger">you currently have no buckets please click the add button to create buckets </div> :
                      <div>
                      <FormGroup>
                        <InputGroup>
                          <FormControl type="text" placeholder="search bucketlist" onChange={(event)=>this.setState({search_text:event.target.value})} required/>
                            <InputGroup.Button><Button type="submit" bsStyle="primary" onClick={(event=>this.handleSearch(event))}>search</Button></InputGroup.Button>
                        </InputGroup>
                      </FormGroup>
                        <Table responsive bordered className="sTable">
                          <thead className="bg-info">
                            <tr>
                              <th>#</th>
                              <th>Bucketname</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              bucketlists.map((bucketlist) => {
                              return(

                                <tr className="buckets">
                                  <td><i>{++x}</i></td>
                                  <td>{bucketlist.name}</td>
                                  <td>
                                    <a data-tip="React-tooltip" data-for='edit' onClick={(event=>this.setState({ editbucketModal: true, id: bucketlist.id , bname :bucketlist.name }))}  className="btn btn-warning"><i className="fa fa-pencil"></i></a>
                                        <ReactTooltip id='edit' type='warning'>
                                          <span>edit this bucketlist</span>
                                        </ReactTooltip>
                                    <a  data-tip="React-tooltip" data-for='delete' onClick={(event=>this.setState({ deletebucketModal:true, id :bucketlist.id}))} className="btn btn-danger"><i className="fa fa-trash"></i></a>
                                        <ReactTooltip id='delete' type='error'>
                                          <span>delete this bucket</span>
                                        </ReactTooltip>
                                    <a data-tip="React-tooltip" data-for='view'href={"/api/bucketlist/"+bucketlist.id+"/items"} className="btn btn-info"><i className="fa fa-eye">{getItems.length}</i> </a>
                                        <ReactTooltip id='view' type='info'>
                                          <span>view items in this bucket</span>
                                      </ReactTooltip>
                                  </td>
                                </tr>
                              )
                              })
                            }

                          </tbody>

                        </Table>
                      </div>
                    }
                      <Pager>
                        <Pager.Item onClick={this.getprevPage}>Previous</Pager.Item>
                          {' '}
                        <Pager.Item onClick={this.getNextPage}>Next</Pager.Item>
                      </Pager>

                  </Col>

                  <Modal show={this.state.addBucketModal} onHide={this.close}>
                    <Modal.Header onClick={(event=>this.setState({ addBucketModal: false }))} closeButton>
                      <Modal.Title>Add a bucket </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <FormGroup>
                        <InputGroup>
                          <FormControl type="text"  id = "name" placeholder="add a bucket name" onChange={(event)=>this.setState({name:event.target.value})} required/>
                            <InputGroup.Button>
                              <Button bsStyle="primary" onClick={(event=>this.handleAddBuckets(event))}>Submit</Button>
                            </InputGroup.Button>
                        </InputGroup>
                      </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={(event=>this.setState({ addBucketModal: false }))} >Close</Button>
                    </Modal.Footer>
                  </Modal>

                  <Modal show={this.state.addItemModal} onHide={this.close}>
                    <Modal.Header onClick={(event=>this.setState({ deletebucketModal: false }))} closeButton>
                      <Modal.Title>Add an item to bucketlist </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <FormGroup>
                        <InputGroup>
                          <FormControl type="text" placeholder="item name" onChange={(event)=>this.setState({name:event.target.value})} required/>
                            <InputGroup.Button>
                              <Button bsStyle="primary" onClick={(event=>this.handleAdditems(event))}>Submit</Button>
                            </InputGroup.Button>
                        </InputGroup>
                      </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={(event=>this.setState({ addItemModal: false }))} >Close</Button>
                    </Modal.Footer>
                  </Modal>

                  <Modal show={this.state.editbucketModal} onHide={this.close}>
                    <Modal.Header onClick={(event=>this.setState({ deletebucketModal: false }))} closeButton>
                      <Modal.Title>edit this bucket </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <FormGroup>
                        <InputGroup>
                          <FormControl  type="text" defaultValue ={this.state.bname} onChange={this.handleupdate} required/>
                          <InputGroup.Button><Button bsStyle="primary" onClick={(event=>this.updateBucket(event))}>Submit</Button></InputGroup.Button>
                        </InputGroup>
                      </FormGroup>
                      </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={(event=>this.setState({ editbucketModal: false }))} >Close</Button>
                    </Modal.Footer>
                  </Modal>

                  <Modal show={this.state.deletebucketModal} onHide={this.close}>
                    <Modal.Header onClick={(event=>this.setState({ deletebucketModal: false }))} closeButton>
                      <Modal.Title>delete this bucket </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <FormGroup>
                        <InputGroup>
                        <h5>are you sure you want to delete this bucket</h5>
                          <InputGroup.Button><Button bsStyle="danger" onClick={(event=>this.deleteHandler(event))}>delete</Button></InputGroup.Button>
                        </InputGroup>
                      </FormGroup>
                      </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={(event=>this.setState({ deletebucketModal: false }))} >Close</Button>
                    </Modal.Footer>
                  </Modal>
            </div>
          </div>
      )
  }
}
export default Mybuckets