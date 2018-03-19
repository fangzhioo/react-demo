import React from 'react';
import ReactDOM from 'react-dom';
import CommentApp from "./comment/CommentApp"
import './index.css';

// make redux
require("./makeRedux/index");

ReactDOM.render(
    <CommentApp />,
    document.getElementById('root')
  );
  
