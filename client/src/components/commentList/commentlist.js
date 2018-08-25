import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom'

// console.log(this.props.location.search);

const CommentList = props => (

  <div className ="card p-3 m-4">
    <p><b>{props.body}</b></p>
    <p className = 'mb-0 border-top'>{props.username}</p>
    <p><b><small>{props.occupation}</small></b></p>
  </div>



);

export default CommentList;