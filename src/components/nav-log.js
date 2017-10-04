import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class Loggedin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }
  handleLogout() {
    localStorage.removeItem('token');
    this.setState({
      redirect: true,
    });
  }
  render() {
    const redirect = this.state.redirect;
    if (redirect) {
      return <Redirect to={{pathname: '/login'}} />
    }
    return (
      <div className="HomePage">
        <Navbar inverse >
          <Nav pullRight>
            <NavItem eventKey={1} href="/api/bucketlist/mybuckets">my buckets</NavItem>
            <NavItem eventKey={2} href="/api/bucketlist/changepassword">reset password</NavItem>
            <NavItem eventKey={3} onClick={(event => this.handleLogout(event))}>logout</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Loggedin;
