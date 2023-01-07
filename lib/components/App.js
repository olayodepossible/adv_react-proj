import React, { Component } from "react";
import DataApi from "../DataApi";
import { data } from "../testData.json";
import ArticleList from "./ArticleList";

const api = new DataApi(data);

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
    };
  }
  articleActions = {
    getAuthor: (authorId) => this.state.authors[authorId],
  };
  render() {
    return (
      <div className="app">
        <ArticleList articles={this.state.articles} action={this.articleActions.getAuthor} />
      </div>
    );
  }
}

export default App;
