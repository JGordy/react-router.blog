import React, { Component } from 'react';
import {Link} from 'react-router-dom';



export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: ''
    }
  }

  componentDidMount() {
    let match = this.props.match;
    const id = this.props.match.params.id;
    const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;
    fetch(URL)
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({post: data})
    })
  }

  render() {
    return (
      <div className="Single_Post">
        <div className="the_post">
          <h1 className="post_author">{this.state.post.authorName}</h1>
          <h3 className="post_title">{this.state.post.blogTitle}</h3>
          <p className="post_entry">{this.state.post.blogEntry}</p>
        </div>
      </div>
    );
  }
}
