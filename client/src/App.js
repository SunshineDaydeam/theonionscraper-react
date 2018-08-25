import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Homepage from './Pages/homepage'
import SavedPage from './Pages/savedpage'
import OneArticle from './Pages/oneArticle'

import './main.css'
// import axios from 'axios'
console.log(Homepage)

const App = () => (
  <BrowserRouter>
    <div>
    	<Route path="/" component = {Homepage} exact/>
      <Route path="/saved" component = {SavedPage} exact/>
      <Route path="/articles/:_id" component = {OneArticle} exact/>
    </div>
  </BrowserRouter>
)
export default App;