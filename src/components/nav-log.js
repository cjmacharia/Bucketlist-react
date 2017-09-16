import React, { Component } from 'react';
import {Navbar, Nav, NavItem } from 'react-bootstrap';

class  Loggedin extends Component{
      render(){
          return(
            <div className="HomePage">
                <Navbar inverse >
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="/">Home</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>

                  <Nav pullRight>
                    <NavItem eventKey={1} href="/mybuckets">my buckets</NavItem>
                    <NavItem eventKey={2} href="/login">logout</NavItem>
                    <NavItem eventKey={2} href="/welcome">add new</NavItem>
                  </Nav>
              </Navbar>
                    </div>
          );
        }
    }
export default Loggedin;