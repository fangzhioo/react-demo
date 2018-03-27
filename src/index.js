import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./nav"
import CommentApp from "./comment/CommentApp"
import CommentApp2 from "./comment2/Index"
import ReactRedux from "./makeRedux/Index"
import UsersContainer from "./react-redux-test/UsersContainer"
import './index.css';
// make redux
// require("./makeRedux/makeredux");

ReactDOM.render((
  <Router>
    <Nav>
      {/* make them children of `Nav` */}
      <Route exact path="/" component={Nav} />
      <Route path="/commentapp" component={CommentApp}/>
      <Route path="/commentapp2" component={CommentApp2}/>
      <Route path="/react-redux-test" component={ReactRedux}/>
      <Route path="/react-redux-userlist" component={UsersContainer}/>
    </Nav>
  </Router>
), document.getElementById('root'))

