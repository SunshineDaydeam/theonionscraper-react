import React, { Component } from 'react';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Article from '../components/Article/Article'

import { BrowserRouter, Route, Link } from 'react-router-dom'

import axios from 'axios'

class SavedPage extends Component {

  // State
  state = {
    title: "The Onion Scraper",
    articles: []
   }

   loadSavedArticles = () => {
    axios.get("/api/savedArticles")
      .then(res => {
      // console.log(res.data);
        this.setState({articles: res.data})
        console.log(this.state.articles)
      })
  }

  lo

  componentDidMount(){
    this.loadSavedArticles();
  }

  // Render to Screen
  render() { 
    return (
      <div>          
        <Header 
          title = {this.state.title}
        />
        {this.state.articles.map(article => (
          <Article
            key = { article._id}
            id = {article._id}
            title = {article.title}
            summary = {article.summary}
            link = {article.link}
            comments = {article.comment.length}
          />
        ))}
      </div>
    );
  }
}
 
export default SavedPage;