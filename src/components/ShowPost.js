import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class PostList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { _id } = this.props.match.params;
    const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${_id}`;
    console.log(this.props.match.params);
    return (
      <div className="Single_Post">

      </div>
    );
  }
}
