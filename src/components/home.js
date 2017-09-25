import React, { Component } from 'react';
import {ListGroup, ListGroupItem, Col, Badge, Jumbotron} from 'react-bootstrap'
import Navigator from './navigate.js'
import { SocialIcon } from 'react-social-icons';
class HomePage extends Component{
      render(){
          return(
            <div>
                <Navigator />
                    <Jumbotron>
                        <p>welcome to my list of buckets click here to  <a href="/login">login</a></p>
                        </Jumbotron>
                        <Col md = {3}>
                        <ListGroup>
                          <ListGroupItem><SocialIcon style={{ height: 25, width: 25 }} color= "black" url="http://facebook.com/cjmash"/>Facebook<Badge>4</Badge></ListGroupItem>
                          <ListGroupItem><SocialIcon style={{ height: 25, width: 25 }} color= "black" url="http://github.com/cjmash"/>Github<Badge>10</Badge></ListGroupItem>
                          <ListGroupItem><SocialIcon style={{ height: 25, width: 25 }} color= "black" url="http://linkedin.com/jamescollo"/>Linkedin<Badge>7</Badge></ListGroupItem>
                          <ListGroupItem ><SocialIcon style={{ height: 25, width: 25 }} color= "black" url="http://twitter.com/jcjames4"/>Twitter<Badge>24</Badge></ListGroupItem>
                      </ListGroup>
                      </Col>

                </div>
          );
      }
    }

export default HomePage;