import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import LoginPage from './components/login';
import Mybuckets from './components/buckets';
import Proutes from './containers/private.js';
import RegisterPage from './components/register';
import noMatch from './components/nomatch';
import Changepassword from './components/changepassword';
import BucketItems from './components/items';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={RegisterPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/api/bucketlist/changepassword" component={Changepassword} />
      <Proutes exact path="/api/bucketlist/mybuckets" component={Mybuckets} />
      <Proutes exact path="/api/bucketlist/" component={Mybuckets} />
      <Proutes exact path="/api/bucketlist" component={Mybuckets} />
      <Proutes exact path="/api/bucketlist/addItem/:bucketlist_id" component={Mybuckets} />
      <Proutes exact path="/api/bucketlist/:bucketlist_id/items" component={BucketItems} />
      <Route component={noMatch} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);

registerServiceWorker();
