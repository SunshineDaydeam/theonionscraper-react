import React, { Component } from 'react';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Article from '../components/Article/Article'
import Modal from '../components/Modal/Modal'

import { BrowserRouter, Route, Link } from 'react-router-dom'

// import './main.css'
import axios from 'axios'

class Homepage extends Component {

  // State
  state = {
    title: "The Onion Scraper",
    articles: [],
    comments: []
   }

   // Loads All Articles
   loadArticles = () => {
    axios.get("/api/articles")
      .then(res => {
      // console.log(res.data);
        this.setState({articles: res.data})
        console.log(this.state.articles)
      })
  }

  componentDidMount(){
    this.loadArticles();
  }

  saveArticle = () => {
    axios.put('/api/savedArticles')
  }

  // Render to Screen
  render() { 
    return (
      <div>          
        <Header 
          title = {this.state.title}
        />
        {/* {this.state.articles.map(article => (
          <Article
            key = { article._id}
            id = {article._id}
            title = {article.title}
            summary = {article.summary}
            link = {article.link}
            comments = {article.comment.length}
            urlLink = {'/articles/' + article._id}
          />
        ))} */}

        <Modal

        />


      </div>
      // <div className = "mb-custom">
      //   <Header
      //     title = {this.state.title}
      //     loadArticles = {this.loadArticles}
      //   />
        // {this.state.articles.map(article => (
        //   <Article
        //     key = { article._id}
        //     id = {article._id}
        //     title = {article.title}
        //     summary = {article.summary}
        //     link = {article.link}
        //   />
        // ))}
      //   <Footer />
      // </div>
    );
  }
}
 
export default Homepage;