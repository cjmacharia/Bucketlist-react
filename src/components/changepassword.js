import React, { Component } from 'react';
import { Col,Button,Modal,InputGroup,FormControl,FormGroup, Panel} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Loggedin from './nav-log.js';
import { toast} from 'react-toastify';
import Toaster from '../containers/toaster.js';
const apiUrl = "https://andela-bucketlistapi.herokuapp.com/";
class Changepassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      changepasswordmodal:false,
      cpassword:'',
      redirect: false
    }
  }

    handleClick(event) {

      var payload = {
        "email":this.state.email,
        "password":this.state.password,
        "cpassword":this.state.cpassword
      }
      if(this.state.password !== this.state.cpassword){
        toast("password mismatch please try again")
        return 0;
    }
    else{
      axios.put(apiUrl+'api/bucketlists/auth/changepassword/', payload)
      .then((response) => {
          this.setState({
              changepasswordmodal:false
          })
        toast.success(response.data.message)
        this.setState({redirect:true})
      })
      .catch((error) => {
        if(error.response){
        toast.error(error.response.data.error);
        }
        this.setState({
            changepasswordmodal:false
        })
      })
    }
    }
  render(){
    const redirect = this.state.redirect
    if (redirect) {
      return <Redirect to = {{pathname: '/welcome'}} />
    }
    return(
      <div>
        <Loggedin />
        <Col md = {4} mdPush = { 4 } >
        <Toaster/>
          <Panel header='reset password' bsStyle="danger">
            <FormGroup>
              <FormControl type="email" id = "email" placeholder= "your email" onChange={(event)=>this.setState({email:event.target.value})} data-error= "this field can not be empty" required/>
            </FormGroup>
            <FormGroup>
             <FormControl type="password" id = "password" placeholder="new Password" onChange={(event)=>this.setState({password:event.target.value})} required/>
            </FormGroup>
            <FormGroup>
             <FormControl type="password" id = "cpassword" placeholder=" confirm Password" onChange={(event)=>this.setState({cpassword:event.target.value})} required/>
            </FormGroup>
            <Button bsStyle="success" onClick={(event=>this.setState({changepasswordmodal:true}))}>submit</Button>
          </Panel>

          <Modal show={this.state.changepasswordmodal} onHide={this.close}>
                    <Modal.Header onClick={(event=>this.setState({changepasswordmodal:false }))} closeButton>
                      <Modal.Title>Add a bucket </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <FormGroup>
                        <InputGroup>
                        <h5>are you sure you want to reset your password</h5>
                            <InputGroup.Button>
                              <Button bsStyle="primary" className="button" onClick={(event=>this.handleClick(event))}>Submit</Button>
                            </InputGroup.Button>
                        </InputGroup>
                      </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={(event=>this.setState({ changepasswordmodal:false}))} >Close</Button>
                    </Modal.Footer>
                  </Modal>
          </Col>
      </div>
    )
  }
}

export default Changepassword;