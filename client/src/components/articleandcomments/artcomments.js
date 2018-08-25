import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom'

// console.log(this.props.location.search);

const ArticleComments = props => (

  <div>
    <div className = 'card p-3 m-3'>
      <a href={props.link}><h5><b>{props.title}</b></h5></a>
      <p>{props.summary}</p>
      <a href='localhost:3001/api/articles'><button className = 'btn-danger'>Save</button></a>
    </div>
  </div>



);

export default ArticleComments;