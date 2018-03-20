import React from 'react';
import ReactDOM from 'react-dom';
import CommentApp from "./comment/CommentApp"
import ReactRedux from "./makeRedux/Index"
import './index.css';

// make redux
require("./makeRedux/makeredux");

// context and redux
ReactDOM.render(
  <ReactRedux />,
  document.getElementById('context')
);

// comment app
ReactDOM.render(
    <CommentApp />,
    document.getElementById('root')
  );
  
  
