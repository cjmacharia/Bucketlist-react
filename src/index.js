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
import  EditBucket from './components/editbucket';
import Proutes from './containers/private.js';
import RegisterPage from './components/register';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Proutes exact path="/welcome" component={Dashboard} />
            <Proutes exact path="/mybuckets" component={Mybuckets}/>
            <Proutes exact path="/addItem/:bucketlist_id" component={AddItem}/>
            <Proutes exact path="/editItem" component={EditBucket}/>

        </div>
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();
