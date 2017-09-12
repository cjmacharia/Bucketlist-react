import React, { Component } from 'react';
import {Navbar, Nav, NavItem } from 'react-bootstrap';

class  Navigator extends Component{
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
                    <NavItem eventKey={1} href="/login">Login</NavItem>
                    <NavItem eventKey={2} href="/register">Register</NavItem>
                  </Nav>
              </Navbar>
                    </div>
          );
        }
    }
export default Navigator;