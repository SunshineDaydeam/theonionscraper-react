import React from "react";
import './Header.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Header = props => (

  <div className="bg-green text-light border-bottom border-dark p-3">
    <h1 className="title text-center font-weight-bold">{props.title}</h1>
    <span className = 'btn btn-info' onClick = {() => props.loadArticles()}>Scrape</span>
    <Link to= '/'><button className = 'btn btn-secondary m-1'>Home</button></Link>
    <Link to= '/Saved'><button className = 'btn btn-danger'>Saved Articles</button></Link>

  </div>
);

export default Header;