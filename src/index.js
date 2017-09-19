import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import HomePage from './components/home';
import Dashboard from './components/welcome';
import LoginPage from './components/login';
import AddItem from './components/additem';
import  Mybuckets from './components/buckets';
import  Manipulation from './components/editbucket';
import Proutes from './containers/private.js';
import RegisterPage from './components/register';
import BucketItems from './components/items';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Proutes exact path="/welcome" component={Dashboard} />
            <Proutes exact path="/api/bucketlist/mybuckets" component={Mybuckets}/>
            <Proutes exact path="/api/bucketlist/" component={Mybuckets}/>
            <Proutes exact path="/api/bucketlist" component={Mybuckets}/>
            <Proutes exact path="/api/bucketlist/addItem/:bucketlist_id" component={AddItem}/>
            <Proutes exact path="/api/bucketlist/editbucketlist/:bucketlist_id" component={Manipulation}/>
            <Proutes exact path="/api/bucketlist/:bucketlist_id/items" component={BucketItems}/>

        </div>
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();
