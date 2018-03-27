import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./nav"
import CommentApp from "./comment/CommentApp"
import CommentApp2 from "./comment2/Index"
import ReactRedux from "./makeRedux/Index"
import UsersContainer from "./react-redux-test/UsersContainer"
import ReactRouter from "./react-router-test/Index"

import './index.css';
// make redux
// require("./makeRedux/makeredux");

ReactDOM.render((
  <Router>
    <Nav>
      <Route exact path="/" component={Nav} />
      <Route path="/commentapp" component={CommentApp}/>
      <Route path="/commentapp2" component={CommentApp2}/>
      <Route path="/react-redux-test" component={ReactRedux}/>
      <Route path="/react-redux-userlist" component={UsersContainer}/>
      <Route path="/react-router-test/:id" component={ReactRouter}/>
    </Nav>
  </Router>
), document.getElementById('root'))

