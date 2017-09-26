import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// const { id } = this.props.match.params;
// const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;


export default class ShowPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
  fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then(results => {
        return results.json();
      }).then(data => {
        this.setState({posts: data});
      })
}

  render() {
    let match = this.props.match;

    let postList = this.state.posts.map(post => {
      return (<div key={post._id} className="blog_post"><Link className="blog_link" to={`${match.url}/${post._id}`}>
              <h2 className="title">{post.blogTitle}</h2>
              <h4 className="author">{post.authorName}</h4></Link>
             </div>
      );
    })
    return (
      <div className="ShowPost">
      {postList}
      </div>
    );
  }
}
