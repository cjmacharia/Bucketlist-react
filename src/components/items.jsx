import React, { Component } from 'react';
import { Col, Button, Table, Modal, InputGroup, FormControl, FormGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import axios from 'axios';
import Toaster from '../containers/toaster.js';
import Loggedin from './nav-log.js';
import './style.css';
import './style.css';

const apiUrl = 'https://andela-bucketlistapi.herokuapp.com/';
class BucketItems extends Component {
  constructor(props) {
    super(props);
    this.handleupdate = this.handleupdate.bind(this);
    this.handleAdditems = this.handleAdditems.bind(this);
    this.getItems = this.getItems.bind(this);
    this.state = {
      items: [],
      name: '',
      redirect: false,
      editItemModal: false,
      deleteItemModal: false,
      addBucketModal: false,
      id: '',
      bname: '',
    };
  }

  handleAdditems(event) {
    event.preventDefault();
    const payload = {
      name: this.state.name,
    };
    axios({
      url: `${apiUrl}api/bucketlists/${this.props.match.params.bucketlist_id}/items/`,
      data: payload,
      method: 'post',
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        content_type: 'application/json',
      },
    })
      .then((response) => {
        toast.success(response.data.message);
        this.getItems();
        this.setState({ addItemModal: false });
      })
      .catch((error) => {
        toast.error(error.response.data.error);
        this.setState({ addItemModal: false });
      });
  }

  handleupdate(event) {
    this.setState({ name: event.target.value });
  }

  updateItem(event, id) {
    event.preventDefault();
    const payload = {
      name: this.state.name,
    };
    id = this.state.id;
    axios({
      url: `${apiUrl}api/bucketlists/${this.props.match.params.bucketlist_id}/items/${id}`,
      method: 'PUT',
      data: payload,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        content_type: 'application/json',
      },

    })
      .then((response) => {
        this.getItems();
        toast.success(response.data.message);
        this.setState({ editItemModal: false });
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        toast.error(error.response.data.error);
        this.setState({ editItemModal: false });
      });
  }

  deleteHandler(event, id) {
    event.preventDefault();
    id = this.state.id;
    axios({
      url: `${apiUrl}api/bucketlists/${this.props.match.params.bucketlist_id}/items/${id}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${ window.localStorage.getItem('token')}`,
        content_type: 'application/json',
      },
    })
      .then((response) => {
        this.getItems();
        toast.error(response.data.message);
        this.setState({ deleteItemModal: false });
      })
      .catch(error =>
        toast.error('an error occured please try again'));
    this.setState({ deleteItemModal: false });
  }

  checkItems() {
    const items = this.state.items;
    if (items < 1) {
      return ('you have no items create some');
    }
  }

  getItems(event) {
    axios({
      url: `${apiUrl}api/bucketlists/${this.props.match.params.bucketlist_id}/items/`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        content_type: 'application/json',
      },
    })
      .then(response => this.setState({
        items: response.data,
      }),
      )
      .catch((error) => {


      });
  }
  componentWillMount() {
    this.getItems();
  }
  render() {
    let x = 0;
    const items = this.state.items;
    const redirect = this.state.redirect;
    if (redirect) {
      return <Redirect to={{ pathname: '/login' }} />;
    }

    return (
      <div>
        <Loggedin />
        <div className="container">
          <Col md={10} mdPush={9}>
            <Button
              id="showmodal"
              onClick={(event =>
                this.setState({
                  addItemModal: true,
                })
              )}
              bsSize="small"
              bsStyle="primary"
            >add</Button>
          </Col>
          <Col md={6} mdPush={3}>
            <h4> add items to this bucketlist </h4>
            <Toaster />
            {this.checkItems() ? <div className="alert alert-danger">you currently have no items please click the add button to create items </div> : <Table responsive bordered className="sTable">
              <thead className="bg-success">
                <tr className="item">
                  <th>#</th>
                  <th>Item</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                    <tr>
                    <td>{++x}</td>
                    <td>{item.name}</td>
                    <td>
                      <a
                        data-tip="React-tooltip"
                        data-for="edit"
                        onClick={(event => this.setState({
                          editItemModal: true,
                          id: item.id,
                          bname: item.name,
                        }))}
                        className="btn btn-warning fa fa-pencil"
                       />
                      <ReactTooltip id="edit" type="warning">
                        <span>edit this item</span>
                      </ReactTooltip>

                      <a
                        data-tip="React-tooltip"
                        data-for="delete"
                        className="delbutton"
                        onClick={(event => this.setState({
                          deleteItemModal: true,
                          id: item.id,
                        }))}
                        className="btn btn-danger fa fa-trash"
                      ></a>
                      <ReactTooltip id="delete" type="error">
                        <span>Delete this item</span>
                      </ReactTooltip>
                    </td>
                  </tr>
                ))
                }
              </tbody>
            </Table>}

          </Col>
          <Modal show={this.state.editItemModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>edit this item </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={(event => this.updateItem(event))}>
                <FormGroup>
                    <InputGroup>
                    <FormControl type="text" defaultValue={this.state.bname} onChange={this.handleupdate} required />
                    <InputGroup.Button>
                      <Button bsStyle="primary" type="submit">Submit</Button>
                    </InputGroup.Button>
                  </InputGroup>
                  </FormGroup>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={(event => this.setState({ editItemModal: false }))} >Close</Button>
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.addItemModal} onHide={this.close}>
            <Modal.Header onClick={(event => this.setState({ addItemModal: false }))} closeButton>
              <Modal.Title>Add an item to bucketlist </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form id="formq"onSubmit={(event => this.handleAdditems(event))}>
                <FormGroup >
                    <InputGroup>
                    <FormControl id="item" type="text" placeholder="item name" onChange={event => this.setState({ name: event.target.value })} required />
                    <InputGroup.Button>
                      <Button bsStyle="primary" type="submit">Submit</Button>
                    </InputGroup.Button>
                  </InputGroup>
                  </FormGroup>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={(event => this.setState({ addItemModal: false }))} >Close</Button>
            </Modal.Footer>
          </Modal>
          <Modal show={this.state.deleteItemModal} onHide={this.close}>
            <Modal.Header onClick={(event => this.setState({ deleteItemModal: false }))} closeButton>
              <Modal.Title>delete this item </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={(event => this.deleteHandler(event))} >
                <FormGroup>
                  <InputGroup>
                    <h5>are you sure you want to delete this item</h5>
                    <InputGroup.Button><Button bsStyle="danger" type="submit">delete</Button></InputGroup.Button>
                  </InputGroup>
                </FormGroup>
              </form>
              </Modal.Body>
            <Modal.Footer>
                <Button onClick={(event => this.setState({ deleteItemModal: false }))} >Close</Button>
              </Modal.Footer>
          </Modal>
        </div>

      </div>
    );
  }
}
export default BucketItems;
