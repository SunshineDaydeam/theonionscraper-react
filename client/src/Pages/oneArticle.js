import React, { Component } from 'react';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Article from '../components/Article/Article'
import ArticleComments from '../components/articleandcomments/artcomments'
import CommentList from '../components/commentList/commentlist'

import { BrowserRouter, Route, Link } from 'react-router-dom'

import axios from 'axios'

class SavedPage extends Component {

  // State
  state = {
    title: "The Onion Scraper",
    article: {},
    comments: []
   }

   loadArticle = () => {
    const { match: { params } } = this.props;
    axios.get( `/api/articles/${params._id}`)
      .then(res => {
      console.log(res.data);
        this.setState({article: res.data})
        this.setState({comments: res.data.comment})
        console.log(this.state.comments)
      })
  }

  componentDidMount(){

    this.loadArticle();

  }

  // Render to Screen
  render() { 
    return (
      <div>          
        <Header 
          title = {this.state.title}
        />

          <ArticleComments
            key = { this.state.article._id}
            id = {this.state.article._id}
            title = {this.state.article.title}
            summary = {this.state.article.summary}
            link = {this.state.article.link}
            comment = {this.state.article.comment}
          />
    
          <p>{}</p>
          {this.state.comments.map(comment=>(
            <CommentList
              id={comment._id}
              key={comment._id}
              body = {comment.body}
              username = {comment.username}
              occupation = {comment.occupation}
            />            
          ))}


      </div>
    );
  }
}
 
export default SavedPage;